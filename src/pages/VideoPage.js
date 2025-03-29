import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ThumbUp, ThumbDown, WatchLater, PlaylistAdd } from "@mui/icons-material";
import CommentSection from "../components/CommentSection/CommentSection";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {
    const location = useLocation();
    const { title, videoSrc } = location.state || {};
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

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

                {/* Title and Buttons Row */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-around",
                        alignItems: isMobile ? "center" : "flex-start",
                        width: isMobile ? "100%" : "70%",
                        mt: 2,
                    }}
                >
                    {/* Video Title */}
                    <Typography variant={isMobile ? "h5" : "h4"}>{title}</Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", gap: 1, mt: isMobile ? 2 : 0 }}>
                        <IconButton color="success" onClick={() => setLikes(likes + 1)}>
                            <ThumbUp /> <Typography sx={{ ml: 0.5 }}>{likes}</Typography>
                        </IconButton>
                        <IconButton color="error" onClick={() => setDislikes(dislikes + 1)}>
                            <ThumbDown /> <Typography sx={{ ml: 0.5 }}>{dislikes}</Typography>
                        </IconButton>
                        <IconButton color="primary">
                            <WatchLater />
                        </IconButton>
                        <IconButton color="secondary">
                            <PlaylistAdd />
                        </IconButton>
                    </Box>
                </Box>
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
