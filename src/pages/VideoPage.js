import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  PlaylistAddOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import CommentSection from "../components/CommentSection/CommentSection";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {
  const location = useLocation();
  const { title, videoSrc } = location.state || {};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  if (!videoSrc) return <Typography variant="h6">Video not found</Typography>;

  return (
    <Box
      sx={{
        maxWidth: "1380px",
        margin: "0 auto",
        px: 1,
        py: 1,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 3,
        }}
      >
        {/* Main Content */}
        <Box
          sx={{
            flex: isMobile ? "unset" : 3,
            width: isMobile ? "100%" : "auto",
          }}
        >
          {/* Video Player */}
          <Box
            sx={{
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            <video controls style={{ width: "100%", display: "block" }}>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            fontWeight={600}
            mt={2}
            sx={{ fontFamily: "Roboto, sans-serif" }}
          >
            {title}
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 1,
            }}
          >
            <IconButton onClick={() => setLikes(likes + 1)}>
              <ThumbUpOutlined fontSize="small" />
              <Typography sx={{ ml: 0.5 }}>{likes}</Typography>
            </IconButton>
            <IconButton onClick={() => setDislikes(dislikes + 1)}>
              <ThumbDownOutlined fontSize="small" />
              <Typography sx={{ ml: 0.5 }}>{dislikes}</Typography>
            </IconButton>
            <IconButton>
              <WatchLaterOutlined fontSize="small" />
            </IconButton>
            <IconButton>
              <PlaylistAddOutlined fontSize="small" />
            </IconButton>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 1 }} />

          {/* Mobile: Show RelatedVideos before video and comments */}
          {isMobile && (
            <Box sx={{ mb: 2, width: "100%" }}>
              <RelatedVideos />
            </Box>
          )}
          {/* Comments Section */}
          <Box sx={{ width: "100%" }}>
            <CommentSection />
          </Box>
        </Box>

        {/* Desktop: Show RelatedVideos on the right */}
        {!isMobile && (
          <Box
            sx={{
              width: "30%",
              minWidth: "100px",
            }}
          >
            <RelatedVideos />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoPage;
