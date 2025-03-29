import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CommentSection from "../components/CommentSection/CommentSection";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
const VideoPage = () => {
    const location = useLocation();
    const { title, videoSrc } = location.state || {};
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile screens

    if (!videoSrc) return <Typography variant="h6">Video not found</Typography>;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                maxWidth: "100%",
            }}
        >
            <video
                controls
                width={isMobile ? "100%" : "70%"} // 100% width on mobile, 70% on larger screens
                style={{ maxWidth: "900px", borderRadius: "5px" }} // Ensures a max width for desktops
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 2, textAlign: "center" }}>
                {title}
            </Typography>
            <RelatedVideos/>
            <CommentSection />
        </Box>
    );
};

export default VideoPage;
