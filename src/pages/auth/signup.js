"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookIcon from "@mui/icons-material/Facebook";

const SignUpPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Sign Up Submitted", { emailOrPhone, password });
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Add Facebook login logic here
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email or Phone Number"
              variant="outlined"
              fullWidth
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
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
              >
                Sign Up
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

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <GoogleLogin
                onSuccess={(response) =>
                  console.log("Google Sign-Up Success:", response)
                }
                onError={() => console.log("Google Sign-Up Error")}
                width="100%"
                useOneTap={false}
                theme="outline"
                text="signup_with" 
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                onClick={handleFacebookLogin}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #fcfcfc",
                  borderRadius: 1,
                  padding: "10px 12px",
                  backgroundColor: "#f8f8f8",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <FacebookIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Sign up with Facebook
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignUpPage;
