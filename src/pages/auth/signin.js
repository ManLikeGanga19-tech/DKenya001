import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./auth";

const SignInPage = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/"); // Redirect after sign-in
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/");
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Sign In
        </Typography>

        {errorMessage && (
          <Typography color="error" variant="body2" textAlign="center">
            {errorMessage}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          <Box textAlign="center" sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isSigningIn}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </Button>
          </Box>
        </form>

        <Box textAlign="center" sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <MuiLink component={Link} to="/signup" underline="hover">
              Sign Up
            </MuiLink>
          </Typography>
        </Box>

        <Box textAlign="center" sx={{ marginTop: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onGoogleSignIn}
            fullWidth
            disabled={isSigningIn}
          >
            Sign In with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInPage;
