import React, { useState } from "react";
import "./Videos.css";

function MediaPlayer({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    console.log("Video clicked:", video);
    setSelectedVideo(video);
    console.log("Selected Video after Click:", selectedVideo);
  };

  return (
    <div className="media-player">
      <div className="video-player" key={selectedVideo.src}>
        {selectedVideo && (
          <video controls autoPlay width="100%">
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default MediaPlayer;
