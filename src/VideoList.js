import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./components/VideoCard/VideoCard";
import VideoOne from "../src/assets/video1.mp4";
import ImageOne from "../src/assets/hqdefault.avif";

const videos = [
    {
        id: 1,
        title: "How to Build a Web App with Next.js",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "120K",
        TimeUploaded: "2 hours"
    },
    {
        id: 2,
        title: "Learn React in 10 Minutes",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "80K",
        TimeUploaded: "2 hours"
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "50K",
        TimeUploaded: "2 hours"
    },
    {
        id: 4,
        title: "Mastering Python",
        thumbnail: ImageOne,
        videoSrc: VideoOne,
        views: "50K",
        TimeUploaded: "2 hours"
    },
];

const VideoList = () => {
    return (
        <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", padding: 2 }}>
            <Box sx={{ display: "flex", gap: 6 }}>
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
