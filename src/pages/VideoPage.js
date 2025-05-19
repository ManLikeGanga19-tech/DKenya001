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
import { useAuth } from "../context/AuthContext"; // adjust if needed
import toast from "react-hot-toast";

const VideoPage = () => {
  const location = useLocation();
  const { title, videoSrc } = location.state || {};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { userLoggedIn } = useAuth();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  if (!videoSrc) return <Typography variant="h6">Video not found</Typography>;

  const notifyLogin = () =>
    toast.error("Please sign in to perform this action");

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
        <Box
          sx={{
            flex: isMobile ? "unset" : 3,
            width: isMobile ? "100%" : "auto",
          }}
        >
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
            <IconButton
              onClick={() =>
                userLoggedIn ? setLikes(likes + 1) : notifyLogin()
              }
            >
              <ThumbUpOutlined fontSize="small" />
              <Typography sx={{ ml: 0.5 }}>{likes}</Typography>
            </IconButton>

            <IconButton
              onClick={() =>
                userLoggedIn ? setDislikes(dislikes + 1) : notifyLogin()
              }
            >
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

          <Divider sx={{ my: 1 }} />

          {isMobile && (
            <Box sx={{ mb: 2, width: "100%" }}>
              <RelatedVideos />
            </Box>
          )}

          <Box sx={{ width: "100%" }}>
            {userLoggedIn ? (
              <CommentSection />
            ) : (
              <Typography variant="body1" color="text.secondary" mt={2}>
                Please{" "}
                <a href="/signin" style={{ color: "#1976d2" }}>
                  sign in
                </a>{" "}
                to comment on this video.
              </Typography>
            )}
          </Box>
        </Box>

        {!isMobile && (
          <Box sx={{ width: "30%", minWidth: "100px" }}>
            <RelatedVideos />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoPage;
