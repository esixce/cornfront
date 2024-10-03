import React, { useState } from "react";

function Player() {
  const videos = [
    {
      src: process.env.PUBLIC_URL + "/assets/videos/vid01.mp4",
      title: "Video 1",
    }
  ];

  return (
    <div>
      <video controls autoPlay width="100%">
        <source src={videos[0].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Player;
