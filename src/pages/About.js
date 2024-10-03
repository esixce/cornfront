import React from "react";
import Map from "../../src/components/Map";
import Seller from "../../src/components/Seller";
import Album from "../components/Album";
import Area from "../components/Area";
import Player from "../components/Player";
import "./About.css";

const albumImages = [
  { src: process.env.PUBLIC_URL + "/assets/images/img06.jpg", alt: "Image 6" },
  { src: process.env.PUBLIC_URL + "/assets/images/img07.jpg", alt: "Image 7" },
];

function About() {
  return (
    <div className="page-content">
      <Player />
      <h2>About the Seller</h2>
      <Seller />
      <h2>Location</h2>
      <Map />
      <Area />
      <h2>Lot</h2>
      <Album images={albumImages} />
    </div>
  );
}

export default About;
