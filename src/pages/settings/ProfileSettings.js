import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff, PhotoCamera } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ProfileSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    profilePic: null,
    profilePicPreview: "",
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePic: file,
        profilePicPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleTogglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleCancel = () => {
    setFormData({
      profilePic: null,
      profilePicPreview: "",
      username: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const handleSave = () => {
    // Add your validation and API logic here
    console.log("Saving user settings:", formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Account Settings
      </Typography>

      <Box textAlign="center">
        <Avatar
          src={formData.profilePicPreview}
          sx={{ width: 100, height: 100, mx: "auto", mb: 1 }}
        />
        <label htmlFor="upload-profile-pic">
          <input
            accept="image/*"
            id="upload-profile-pic"
            type="file"
            hidden
            onChange={handleProfilePicChange}
          />
          <Button
            variant="outlined"
            component="span"
            startIcon={<PhotoCamera />}
          >
            Upload
          </Button>
        </label>
      </Box>

      <TextField
        fullWidth
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Current Password"
        name="currentPassword"
        type={showPassword.current ? "text" : "password"}
        value={formData.currentPassword}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => handleTogglePassword("current")}
                edge="end"
              >
                {showPassword.current ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        label="New Password"
        name="newPassword"
        type={showPassword.new ? "text" : "password"}
        value={formData.newPassword}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => handleTogglePassword("new")}
                edge="end"
              >
                {showPassword.new ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        label="Confirm New Password"
        name="confirmNewPassword"
        type={showPassword.confirm ? "text" : "password"}
        value={formData.confirmNewPassword}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => handleTogglePassword("confirm")}
                edge="end"
              >
                {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
        <Button variant="outlined" color="inherit" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSettings;
