import React, { useState, useRef } from "react";
import { Card, CardMedia, CardContent, Typography, CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Video from "../../assets/video1.mp4";

const VideoCard = ({ id, title, thumbnail, views, TimeUploaded }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

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

    const handleCardClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate(`/video/${title}`, { state: { title, videoSrc: Video } });
            window.scrollTo(0, 0); 
        }, 1500); 
    };

    return (
        <Card
            sx={{ 
                width: { xs: "100%", sm: "90%", md: "400px" }, 
                cursor: "pointer", 
                borderRadius: 2, 
                overflow: "hidden", 
                maxWidth: "400px",
                margin: "auto",
                position: "relative"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            {loading ? (
                <Box 
                    sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        height: 180, 
                        backgroundColor: "#f0f0f0" 
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                isHovered ? (
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
                )
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
