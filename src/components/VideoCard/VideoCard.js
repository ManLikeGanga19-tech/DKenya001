"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const VideoCard = ({ title, thumbnail, views, TimeUploaded }) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: "12px",
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      {/* Video Thumbnail */}
      <CardMedia
        component="video"
        height="180"
        image={thumbnail}
        alt={title}
        sx={{ objectFit: "cover" }}
        autoPlay
        muted
      />

      {/* Video Details */}
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {views} views
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {TimeUploaded} ago
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
