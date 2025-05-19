import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";

const PublicProfile = () => {
  const theme = useTheme();

  // Mocked user data — Replace this with real data when backend is ready
  const userData = {
    username: "Test Profile",
    profilePic: "https://i.pravatar.cc/150?img=3", // Placeholder image
  };

  return (
    <Box mt={10} display="flex" justifyContent="center">
      <Card
        sx={{
          width: 350,
          textAlign: "center",
          py: 4,
          boxShadow: 5,
          backgroundColor:
            theme.palette.mode === "dark" ? "#121212" : "#fafafa",
        }}
      >
        <Avatar
          src={userData.profilePic}
          alt={userData.username}
          sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight={600}>
            {userData.username}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            This is what your public profile looks like.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PublicProfile;
