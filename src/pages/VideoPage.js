import React from "react";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
    const location = useLocation();
    const { title, videoSrc } = location.state || {};

    if (!videoSrc) return <h2>Video not found</h2>;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
            <video controls width="600">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1>{title}</h1>
        </div>
    );
};

export default VideoPage;
