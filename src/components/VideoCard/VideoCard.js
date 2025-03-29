import React, { useState, useRef } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Video from "../../assets/video1.mp4";

const VideoCard = ({ id, title, thumbnail, views, TimeUploaded }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigation

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();

            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsHovered(false);
                }
            }, 10000);
        }
    };

    // Navigate to the video page with the video ID
    const handleCardClick = () => {
        navigate(`/video/${title}`, { state: { title, videoSrc: Video } });
    };

    return (
        <Card
            sx={{ 
                width: { xs: "100%", sm: "90%", md: "400px" }, 
                cursor: "pointer", 
                borderRadius: 2, 
                overflow: "hidden", 
                maxWidth: "400px",
                margin: "auto"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick} // Open new page on click
        >
            {isHovered ? (
                <CardMedia
                    component="video"
                    ref={videoRef}
                    src={Video}
                    autoPlay
                    muted
                    playsInline
                    loop={false}
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
