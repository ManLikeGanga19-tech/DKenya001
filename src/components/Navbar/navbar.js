"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
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
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

// ✅ Correct Icons for Drawer Items
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";

// Custom styles for search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to toggle the drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Function to toggle the search modal on mobile
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // ✅ Drawer content with correct icons
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "History", icon: <HistoryIcon /> },
          { text: "Watch Later", icon: <WatchLaterIcon /> },
          { text: "Liked Videos", icon: <ThumbUpIcon /> },
          { text: "Trending", icon: <WhatshotIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#212121" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          {/* Left Section (Logo + Menu) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
                fontWeight: "bold",
                fontSize: isMobile ? "16px" : "20px",
                color: "red",
                cursor: "pointer",
              }}
            >
              DKENYA001
            </Box>
          </Box>

          {/* Center Section (Search Bar - Visible on large screens) */}
          {!isMobile && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          )}

          {/* Right Section (Icons) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile ? (
              // On mobile, show only search & account icons
              <>
                <IconButton color="inherit" onClick={toggleSearch}>
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </>
            ) : (
              // On desktop, show all icons
              <>
                <IconButton color="inherit">
                  <VideoCallIcon />
                </IconButton>
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* Mobile Search Modal */}
      <Dialog open={searchOpen} onClose={toggleSearch} fullWidth>
        <DialogContent sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} autoFocus />
          </Search>
          <IconButton onClick={toggleSearch} sx={{ ml: 1 }}>
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
