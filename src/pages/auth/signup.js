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
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from "./auth";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
      await doSendEmailVerification(); // Optional
      navigate("/signin"); // Redirect after sign-up
    } catch (err) {
      setError(err.message);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Sign Up
        </Typography>

        {error && (
          <Typography color="error" variant="body2" textAlign="center">
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            required
          />

          <Box textAlign="center" sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isRegistering}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </Button>
          </Box>
        </form>

        <Box textAlign="center" sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <MuiLink component={Link} to="/signin" underline="hover">
              Sign In
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
