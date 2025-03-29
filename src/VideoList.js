import React from "react";
import { Box, Grid } from "@mui/material";
import VideoCard from "./components/VideoCard/VideoCard";



const videos = [
    {
        id: 1,
        title: "How to Build a Web App with Next.js",
        thumbnail: "https://source.unsplash.com/400x300/?technology",
        views: "120K",
        TimeUploaded: "2 hours"
    },
    {
        id: 2,
        title: "Learn React in 10 Minutes",
        thumbnail: "https://source.unsplash.com/400x300/?coding",
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
];

const VideoList = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
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
