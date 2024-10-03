import React from "react";
import Album from "../components/Album";
import Videos from "../components/Videos";
import "./Gallery.css";

const albumImages = [
  { src: process.env.PUBLIC_URL + "/assets/images/img01.jpg", alt: "Image 1" },
  { src: process.env.PUBLIC_URL + "/assets/images/img02.jpg", alt: "Image 2" },
  { src: process.env.PUBLIC_URL + "/assets/images/img03.jpg", alt: "Image 3" },
  { src: process.env.PUBLIC_URL + "/assets/images/img04.jpg", alt: "Image 4" },
];

const videos = [
  {
    src: process.env.PUBLIC_URL + "/assets/videos/vid02.mp4",
    title: "Video 1",
  }
];

function Gallery() {
  return (
    <div className="page-content">
      <h2>10 Acres of Possibilities</h2>
      <p>
        Perfectly situated just across the street from the breathtaking beach.
        If you're seeking an investment opportunity to build your dream home or
        multiple homes, this is it. Explore the natural beauty of the area and
        imagine the possibilities. Learn more about the land, the surroundings,
        and the incredible potential it holds.
      </p>
      <video controls autoPlay width="100%">
            <source src={videos[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      <p>
        This incredible 10-acre property is your canvas for creativity and
        opportunity. Just steps away from the beach, the land holds endless
        potential. It can be subdivided into 5 separate parcels, offering
        flexibility for development. Whether you're dreaming of a single,
        spacious estate or considering building multiple homes, this property is
        your starting point. An ideal investment for those with a vision and an
        appreciation for nature.
      </p>
      <Album images={albumImages} />
    </div>
  );
}

export default Gallery;
