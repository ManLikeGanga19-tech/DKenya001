from fastapi import FastAPI
from app.database import SessionLocal, Base, engine
from app.routers import auth
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


app.include_router(auth.router)


@app.get("/")
def read_root():
    try:
        db = SessionLocal()
        return {"message": "✅ Database connected successfully"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()
