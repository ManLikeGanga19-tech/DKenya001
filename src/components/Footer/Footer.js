import React from "react";
import { Box, Typography, IconButton, Stack, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#f7f7f7",
        py: 3,
        mt: "auto",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          © {new Date().getFullYear()} DKENYA001. All rights reserved.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Follow us on social media
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
          <IconButton
            aria-label="Facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: "black",
              "&:hover": {
                color: "gray",
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: "black",
              "&:hover": {
                color: "gray",
              },
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: "black",
              "&:hover": {
                color: "gray",
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: "black",
              "&:hover": {
                color: "gray",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
