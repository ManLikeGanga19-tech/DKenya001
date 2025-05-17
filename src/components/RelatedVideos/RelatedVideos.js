import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ImageOne from "../../assets/hqdefault.avif";
import VideoOne from "../../assets/video1.mp4";

const relatedVideos = [
  {
    id: 1,
    title: "How to Build a React App",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "2 hours",
  },
  {
    id: 2,
    title: "Learn JavaScript Basics",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "2 hours",
  },
  {
    id: 3,
    title: "CSS Flexbox & Grid",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "2 hours",
  },
  {
    id: 4,
    title: "Mastering Material UI",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "2 hours",
  },
  {
    id: 5,
    title: "Mastering Tailwind CSS",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "4 hours",
  },
  {
    id: 6,
    title: "More Tailwind Tricks",
    thumbnail: ImageOne,
    videoSrc: VideoOne,
    views: "120k",
    TimeUploaded: "5 hours",
  },
];

const RelatedVideos = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ width: "100%", ml: isDesktop ? 6 : 1 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 1 }}>
        Related Videos
      </Typography>

      <Grid container spacing={2}>
        {relatedVideos.map((video) => (
          <Grid
            item
            xs={6} // 2 columns on xs (mobile)
            sm={6} // 2 columns on small screens
            md={12} // 1 column on medium and up
            key={video.id}
          >
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
