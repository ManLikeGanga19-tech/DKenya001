import React, { useState } from "react";
import { Avatar, Button, Card, CardContent, IconButton, TextField, Typography, Box, useMediaQuery } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

const CommentSection = () => {
    const [comments, setComments] = useState([
        { id: 1, name: "Adamsdavid", text: "Codewell's community is amazing!", likes: 2, dislikes: 0 },
        { id: 2, name: "saramay", text: "I love practicing on their templates!", likes: 5, dislikes: 1 }
    ]);
    const [newComment, setNewComment] = useState("");

    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const newEntry = {
            id: Date.now(),
            name: "User", // Default user
            text: newComment,
            likes: 0,
            dislikes: 0
        };
        setComments([...comments, newEntry]);
        setNewComment("");
    };

    const handleLike = (id) => {
        setComments(comments.map(comment =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        ));
    };

    const handleDislike = (id) => {
        setComments(comments.map(comment =>
            comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
        ));
    };

    return (
        <Box sx={{
            width: isSmallScreen ? "100%" : "100%",
            padding: 2,
            margin: "auto",
        }}>
            <Typography variant="h5" gutterBottom>Comments</Typography>
            
            {comments.map(comment => (
                <Card key={comment.id} sx={{ marginTop: 2, padding: 1 }}>
                    <CardContent sx={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: isSmallScreen ? "column" : "row",
                        gap: 2,
                    }}>
                        <Avatar>{comment.name.charAt(0)}</Avatar>
                        <Box flexGrow={1} textAlign="left">
                            <Typography variant="subtitle1"><strong>{comment.name}</strong></Typography>
                            <Typography variant="body2">{comment.text}</Typography>
                        </Box>
                        <Box display="flex" gap={1}>
                            <IconButton sx={{ color: "#00a152" }} onClick={() => handleLike(comment.id)}>
                                <ThumbUp /> <Typography>{comment.likes}</Typography>
                            </IconButton>
                            <IconButton color="error" onClick={() => handleDislike(comment.id)}>
                                <ThumbDown /> <Typography>{comment.dislikes}</Typography>
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
                
            ))}
            <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} gap={1} mt={"6px"}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": { borderColor: "black" } 
                        }
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleAddComment}
                    sx={{
                        width: isSmallScreen ? "100%" : "auto",
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": { backgroundColor: "#333" } 
                    }}
                >
                    Post
                </Button>
            </Box>
        </Box>
        
    );
};

export default CommentSection;
