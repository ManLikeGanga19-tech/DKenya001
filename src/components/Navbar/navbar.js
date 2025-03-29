"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Drawer Icons
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "History", icon: <HistoryIcon /> },
          { text: "Watch Later", icon: <WatchLaterIcon /> },
          { text: "Liked Videos", icon: <ThumbUpIcon /> },
          { text: "Trending", icon: <WhatshotIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: darkMode ? "#fff" : "#000" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Report", icon: <ReportIcon /> },
          { text: "Help", icon: <HelpIcon /> },
          { text: "Send Feedback", icon: <FeedbackIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: darkMode ? "#fff" : "#000" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? "#000" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          {/* Left Section (Menu Button) */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          

          {/* Right Section (Icons) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton color="inherit">
              <VideoCallIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
