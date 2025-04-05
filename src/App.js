import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import VideoList from "./VideoList";
import VideoPage from "../src/pages/VideoPage";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Box sx={{ mt: 10, flex: 1, px: 2 }}>
            <Routes>
              <Route path="/" element={<VideoList />} />
              <Route path="/video/:title" element={<VideoPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
