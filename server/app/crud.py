from sqlalchemy.orm import Session
from app import models, schemas


def get_user(db: Session, uid: str):
    return db.query(models.User).filter(models.User.uid == uid).first()


def create_user(db: Session, user: schemas.UserBase):
    db_user = models.User(uid=user.uid, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
