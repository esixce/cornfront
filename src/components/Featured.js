import React from "react";
import "./Featured.css";

function Featured({ imageUrl, title }) {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="featured" style={styles}>
      <div className="image-content">
        <h1 className="featured-title">{title}</h1>
        <p className="featured-par">Own a piece of paradise in Colima, Mexico</p>
      </div>
    </div>
  );
}

export default Featured;
