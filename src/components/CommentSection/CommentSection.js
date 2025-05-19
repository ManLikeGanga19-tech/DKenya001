import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ThumbUp, ThumbDown, Delete } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext"; // adjust path as needed
import toast from "react-hot-toast";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const { userLoggedIn, currentUser } = useAuth(); // Assuming `currentUser` has `email` or `name`

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: currentUser?.email || "Anonymous",
      text: newComment.trim(),
      likes: 0,
      dislikes: 0,
    };

    setComments([...comments, newEntry]);
    setNewComment("");
    toast.success("Comment added!");
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  };

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
    toast.success("Comment deleted.");
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        margin: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      {comments.map((comment) => (
        <Card key={comment.id} sx={{ marginTop: 2, padding: 1 }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: isSmallScreen ? "column" : "row",
              gap: 2,
            }}
          >
            <Avatar>{comment.name.charAt(0).toUpperCase()}</Avatar>
            <Box flexGrow={1} textAlign="left">
              <Typography variant="subtitle1">
                <strong>{comment.name}</strong>
              </Typography>
              <Typography variant="body2">{comment.text}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <IconButton
                sx={{ color: "#00a152" }}
                onClick={() => handleLike(comment.id)}
              >
                <ThumbUp />
                <Typography>{comment.likes}</Typography>
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDislike(comment.id)}
              >
                <ThumbDown />
                <Typography>{comment.dislikes}</Typography>
              </IconButton>
              {comment.name === currentUser?.email && (
                <IconButton
                  color="warning"
                  onClick={() => handleDelete(comment.id)}
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}

      {userLoggedIn ? (
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          gap={1}
          mt={"6px"}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": { borderColor: "black" },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleAddComment}
            sx={{
              width: isSmallScreen ? "100%" : "auto",
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Post
          </Button>
        </Box>
      ) : (
        <Typography variant="body1" color="text.secondary" mt={2}>
          Please{" "}
          <a href="/signin" style={{ color: "#1976d2" }}>
            sign in
          </a>{" "}
          to post a comment.
        </Typography>
      )}
    </Box>
  );
};

export default CommentSection;
