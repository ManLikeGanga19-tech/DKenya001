import React from "react";
import Navbar from "./components/Navbar/navbar";
import VideoList from "./VideoList";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />

      <Box sx={{ mt: 10, padding: 2 }}> 
        <VideoList />
      </Box>
    </Box>
  );
};

export default App;
