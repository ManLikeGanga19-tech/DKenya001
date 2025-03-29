import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ImageOne from "../../assets/hqdefault.avif";
import VideoOne from "../../assets/video1.mp4";

const relatedVideos = [
    { id: 1, title: "How to Build a React App", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "2 hours" },
    { id: 2, title: "Learn JavaScript Basics", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "2 hours" },
    { id: 3, title: "CSS Flexbox & Grid", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "2 hours" },
    { id: 4, title: "Mastering Material UI", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "2 hours" },
    { id: 5, title: "Mastering tailwindcss", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "4 hours" },
    { id: 6, title: "Mastering tailwindcss", thumbnail: ImageOne, videoSrc: VideoOne, views: "120k", TimeUploaded: "5 hours" },

];

const RelatedVideos = () => {
    return (
        <Box sx={{ width: "70%", margin: "auto", mt: 3 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>Related Videos</Typography>

            <Grid container spacing={1} justifyContent="center">
                {relatedVideos.map(video => (
                    <Grid item xs={12} sm={6} md={4} key={video.id}>
                        <VideoCard
                            id={video.id}
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

export default RelatedVideos;
