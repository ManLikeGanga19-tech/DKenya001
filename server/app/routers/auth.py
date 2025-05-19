from fastapi import APIRouter, Request, HTTPException, Depends, status
from pydantic import BaseModel
from firebase_admin import auth as firebase_auth
from sqlalchemy.orm import Session
from app import crud, schemas
from app.firebase import initialize_firebase
from app.database import get_db, SessionLocal
from app.models import User

router = APIRouter()

# Initialize Firebase when this module is imported
initialize_firebase()

# -----------------------------
# Schema for token input
# -----------------------------


class TokenData(BaseModel):
    id_token: str

# -----------------------------
# Firebase Token Verifier (Dependency)
# -----------------------------


def verify_token(request: Request, db: Session = Depends(get_db)):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authorization header missing or invalid"
        )

    id_token = auth_header.split("Bearer ")[1]
    try:
        decoded_token = firebase_auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        email = decoded_token.get('email')

        if not email:
            raise HTTPException(
                status_code=400, detail="Email not found in token")

        # Save user to DB if not exists
        user = db.query(User).filter(User.uid == uid).first()
        if not user:
            user = User(uid=uid, email=email)
            db.add(user)
            db.commit()
            db.refresh(user)

        return decoded_token

    except Exception:
        raise HTTPException(
            status_code=401, detail="Invalid or expired Firebase token")

# -----------------------------
# POST: Firebase Token Login
# -----------------------------


@router.post("/auth/firebase")
async def firebase_login(token_data: TokenData, db: Session = Depends(get_db)):
    try:
        decoded_token = firebase_auth.verify_id_token(token_data.id_token)
        uid = decoded_token["uid"]
        email = decoded_token.get("email")

        if not email:
            raise HTTPException(
                status_code=400, detail="Email not found in token")

        user = db.query(User).filter(User.uid == uid).first()
        if not user:
            user = User(uid=uid, email=email)
            db.add(user)
            db.commit()
            db.refresh(user)

        return {
            "message": "User authenticated",
            "user_id": user.id,
            "email": user.email
        }

    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid Firebase token")

# -----------------------------
# GET: Protected Route
# -----------------------------


@router.get("/protected")
def protected_route(request: Request, user=Depends(verify_token)):
    db = SessionLocal()
    try:
        uid = user["uid"]
        email = user["email"]

        db_user = crud.get_user(db, uid)
        if not db_user:
            new_user = schemas.UserBase(uid=uid, email=email)
            crud.create_user(db, new_user)

        return {
            "message": f"Hello, {email}! You are authenticated and stored in the database."
        }

    finally:
        db.close()
