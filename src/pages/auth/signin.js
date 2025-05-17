"use client"; // Required for Next.js App Router

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
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Submitted", { emailOrPhone, password });
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
            Sign In
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

            <Box textAlign="center" sx={{ marginTop: 2 }}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Sign In
              </Button>
            </Box>
          </form>

          {/* Sign-up redirect link */}
          <Box textAlign="center" sx={{ marginTop: 2 }}>
            <Typography variant="body2">
              Don’t have an account?{" "}
              <MuiLink component={Link} to="/signup" underline="hover">
                Sign Up
              </MuiLink>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <GoogleLogin
                  onSuccess={(response) => console.log("Google Success:", response)}
                  onError={() => console.log("Google Sign-In Error")}
                  width="100%"
                />
              </Box>
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
                <Typography sx= {{color: "#464646", fontWeight: 500 , fontSize: "14px"}}> Sign in with Facebook</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignInPage;
