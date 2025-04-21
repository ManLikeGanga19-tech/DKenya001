import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./components/VideoCard/VideoCard";
import VideoOne from "../src/assets/video1.mp4";
import ImageOne from "../src/assets/hqdefault.avif";
import {useMediaQuery, useTheme} from "@mui/material";

 
const videos = [
    {
        id: 1,
        title: "I am Princess Mueni",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "120K",
        TimeUploaded: "2 hours"
    },
    {
        id: 2,
        title: "I am mueni.",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "80K",
        TimeUploaded: "2 hours"
    },
    {
        id: 3,
        title: "Hey, Bubba!",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "50K",
        TimeUploaded: "2 hours"
    },
    {
        id: 4,
        title: "POV! ",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "50K",
        TimeUploaded: "2 hours"
    },
];

const VideoList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

    return (
        <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", padding: 0.5 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", 
                    gap: isMobile ? 1 : 3, 
                    alignItems: isMobile ? "center" : "flex-start", 
                }}
            >
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        videoSrc={video.videoSrc}
                        views={video.views}
                        TimeUploaded={video.TimeUploaded}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default VideoList;