import React from "react";
import { Box, Grid } from "@mui/material";
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
        thumbnail: VideoOne,
        views: "80K",
        TimeUploaded: "2 hours"

    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        thumbnail: "https://source.unsplash.com/400x300/?design",
        views: "50K",
        TimeUploaded: "2 hours"

    },
    {
        id: 4,
        title: "Mastering Python",
        thumbnail: "https://source.unsplash.com/400x300/?design",
        views: "50K",
        TimeUploaded: "2 hours"

    },
];

const VideoList = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Grid container spacing={5} justifyContent="center">
                {videos.map((video) => (
                    <Grid item key={video.id}>
                        <VideoCard
                            title={video.title}
                            thumbnail={video.thumbnail}
                            views={video.views}
                            TimeUploaded={video.TimeUploaded}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default VideoList;
