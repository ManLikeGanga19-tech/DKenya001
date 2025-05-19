from pydantic import BaseModel


class UserBase(BaseModel):
    uid: str
    email: str

    class Config:
        orm_mode = True
