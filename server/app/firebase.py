import firebase_admin
from firebase_admin import credentials
import os
from dotenv import load_dotenv

firebase_app = None


def initialize_firebase():
    global firebase_app

    load_dotenv()

    if not firebase_app:
        cred_path = os.getenv("FIREBASE_CREDENTIALS_PATH")
        if not cred_path:
            raise ValueError("FIREBASE_CREDENTIALS_PATH is not set in .env")

        cred = credentials.Certificate(cred_path)
        firebase_app = firebase_admin.initialize_app(cred)
