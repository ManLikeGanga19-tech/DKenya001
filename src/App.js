import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import VideoList from "./VideoList";
import VideoPage from "../src/pages/VideoPage";
import { Box } from "@mui/material";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";

const App = () => {
  return (
    <Router>  {/* ✅ Ensures that useNavigate() works */}
      <Box>
        <Navbar />
        <Box sx={{ mt: 10, padding: 2 }}>
          <Routes>
            <Route path="/" element={<VideoList />} />
            <Route path="/video/:title" element={<VideoPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
