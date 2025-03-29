import React, { useState, useRef } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Video from "../../assets/video1.mp4";

const VideoCard = ({ title, thumbnail, views, TimeUploaded }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null); // Reference to control the video

    // Start video on hover and stop it after 10 seconds
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Start from beginning
            videoRef.current.play();

            // Stop video after 10 seconds
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsHovered(false); // Revert to thumbnail
                }
            }, 10000);
        }
    };

    return (
        <Card
            sx={{ width: 300, cursor: "pointer", borderRadius: 2, overflow: "hidden" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <CardMedia
                    component="video"
                    ref={videoRef} // Attach ref to control playback
                    src={Video}
                    autoPlay
                    muted
                    playsInline
                    loop={false} // Do not loop
                    style={{ height: 180, objectFit: "cover" }}
                />
            ) : (
                <CardMedia
                    component="img"
                    image={thumbnail}
                    alt={title}
                    style={{ height: 180, objectFit: "cover" }}
                />
            )}

            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {views} views • {TimeUploaded} ago
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
