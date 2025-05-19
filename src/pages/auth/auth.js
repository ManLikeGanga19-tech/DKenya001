import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}; 

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return  signInWithPopup(auth, provider);
    // result.user;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const sendTokenToBackend = async (idToken) => {
  const response = await fetch("http://localhost:8000/auth/firebase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_token: idToken }), 
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Backend login failed");
  }

  return await response.json();
};
