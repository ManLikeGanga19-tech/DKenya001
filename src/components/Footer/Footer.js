import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import SvgIcon from "@mui/material/SvgIcon";

// Custom X (Twitter) Icon
const XIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M22.46 2H1.54v20h20.92V2zm-6.8 14.93h-2.09l-2.73-3.6-3.17 3.6H5.4l4.01-4.53L5.6 7.2h2.2l2.47 3.28 2.89-3.28h2.02l-4.02 4.55 4.49 5.18z" />
  </SvgIcon>
);

// Custom OnlyFans Icon (simplified SVG)
const OnlyFansIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M21.6 8.2c-.6-1.8-2-3.2-3.9-3.8-2.3-.8-4.7-.2-6.3 1.3C8.6 4.4 5 5 3.1 7.8c-2 3.1-.6 7.2 2.9 8.6 2.4 1 5.2.2 6.8-1.7v-.2c-.5.2-1 .3-1.5.3-1.9 0-3.4-1.5-3.4-3.4S9.4 8 11.3 8c1.6 0 2.9 1.1 3.3 2.5.4-1.1 1.2-2.1 2.2-2.7 1.4-.8 3.2-.2 3.8 1.2.6 1.2.1 2.7-1 3.4-.8.5-1.8.7-2.7.6-.1.9-.5 1.8-1.2 2.5 2.5.1 4.8-1.3 5.6-3.6.3-.9.3-1.8 0-2.5zM11.3 10.3c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.8 0 1.5-.7 1.5-1.6s-.7-1.6-1.5-1.6z" />
  </SvgIcon>
);

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
          Follow me on social media
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
          

          <IconButton aria-label="x" href="#" target="_blank" rel="noopener" sx={{ color: isDark ? "#fff" : "#000" }}>
            <XIcon />
          </IconButton>

          <IconButton aria-label="instagram" href="#" target="_blank" rel="noopener" sx={{ color: isDark ? "#fff" : "#000" }}>
            <InstagramIcon />
          </IconButton>

          <IconButton aria-label="onlyfans" href="#" target="_blank" rel="noopener" sx={{ color: isDark ? "#fff" : "#000" }}>
            <OnlyFansIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
