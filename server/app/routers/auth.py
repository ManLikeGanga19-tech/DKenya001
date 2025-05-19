from fastapi import APIRouter, Request, HTTPException, Depends
from firebase_admin import auth as firebase_auth
from sqlalchemy.orm import Session

from app.firebase import initialize_firebase
from app.database import get_db
from app.models import User

router = APIRouter()

initialize_firebase()  # Run once at import


def verify_token(request: Request, db: Session = Depends(get_db)):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        raise HTTPException(
            status_code=401, detail="Authorization header missing or invalid")

    id_token = auth_header.split("Bearer ")[1]
    try:
        decoded_token = firebase_auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        email = decoded_token.get('email')

        # Save to DB if not exists
        user = db.query(User).filter(User.uid == uid).first()
        if not user:
            user = User(uid=uid, email=email)
            db.add(user)
            db.commit()
            db.refresh(user)

        return decoded_token
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid Firebase token")


@router.get("/protected")
def protected_route(user=Depends(verify_token)):
    return {"message": f"Hello, {user['email']}! You are authenticated."}
