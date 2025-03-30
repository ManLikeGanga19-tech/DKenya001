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
} from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import AppleSignin from "react-apple-signin-auth";

const SignInPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Submitted", { emailOrPhone, password });
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
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />

            <Box textAlign="center" sx={{ marginTop: 2 }}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Sign In
              </Button>
            </Box>
          </form>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6}>
              <GoogleLogin
                onSuccess={(response) => console.log("Google Success:", response)}
                onError={() => console.log("Google Sign-In Error")}
              />
            </Grid>

            <Grid item xs={6}>
              <AppleSignin
                authOptions={{
                  clientId: "YOUR_APPLE_CLIENT_ID",
                  redirectURI: "YOUR_REDIRECT_URI",
                  scope: "email name",
                  responseMode: "query",
                }}
                onSuccess={(response) => console.log("Apple Success:", response)}
                onError={(error) => console.log("Apple Error:", error)}
                render={(props) => (
                  <Button variant="outlined" color="secondary" fullWidth onClick={props.onClick}>
                    Apple
                  </Button>
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignInPage;
