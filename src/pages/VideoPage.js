import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CommentSection from "../components/CommentSection/CommentSection";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {
    const location = useLocation();
    const { title, videoSrc } = location.state || {};
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (!videoSrc) return <Typography variant="h6">Video not found</Typography>;

    return (
        <Box sx={{ padding: 2, maxWidth: "100%", margin: "auto", textAlign: "center" }}>
            {/* Video Player */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <video
                    controls
                    width={isMobile ? "100%" : "70%"}
                    style={{ maxWidth: "900px", borderRadius: "5px" }}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 2 }}>
                    {title}
                </Typography>
            </Box>

            {/* Centered Related Videos Section */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <RelatedVideos />
            </Box>

            {/* Comments Section */}
            <CommentSection />
        </Box>
    );
};

export default VideoPage;
