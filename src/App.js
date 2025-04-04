import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import VideoList from "./VideoList";
import VideoPage from "../src/pages/VideoPage";
import { Box } from "@mui/material";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1, mt: 10, px: 2 }}>
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
  );
};

export default App;
