# app/main.py

from fastapi import FastAPI
from app.database import SessionLocal

app = FastAPI()


@app.get("/")
def read_root():
    try:
        db = SessionLocal()
        return {"message": "✅ Database connected successfully"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()
