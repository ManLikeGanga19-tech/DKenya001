import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wrap async logic in an async function
    getRedirectResult(auth)
    .then((result) => {
      if (result) {
        initializeUser(result.user); 
      }
    })
    .catch((error) => {
      console.error("Error from redirect sign-in:", error);
    });

    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      initializeUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Initialize user and logged in state
  function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
