import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: isDark ? "#121212" : "#f7f7f7",
        py: 3,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: isDark ? "#333" : "#ddd",
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
          {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
            (Icon, index) => (
              <IconButton
                key={index}
                aria-label="social-icon"
                href="#"
                target="_blank"
                rel="noopener"
                sx={{
                  color: isDark ? "#fff" : "#000",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: isDark ? "#90caf9" : "#1976d2",
                  },
                }}
              >
                <Icon />
              </IconButton>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
