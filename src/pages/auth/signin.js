import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  sendTokenToBackend,
} from "./auth";

const SignInPage = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/");
    }
  }, [userLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        // Sign in with Firebase
        const userCredential = await doSignInWithEmailAndPassword(
          email,
          password
        );

        // Get Firebase ID token
        const idToken = await userCredential.user.getIdToken();

        // Send token to backend for verification and user creation
        await sendTokenToBackend(idToken);

        // After successful backend auth, navigate to home or dashboard
        navigate("/");
      } catch (error) {
        setErrorMessage(error.message || "Sign-in failed");
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const userCredential = await doSignInWithGoogle();

      const idToken = await userCredential.user.getIdToken();

      await sendTokenToBackend(idToken);

      navigate("/");
    } catch (error) {
      setErrorMessage(error.message || "Google Sign-in failed");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
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
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
          >
            Sign In with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInPage;
