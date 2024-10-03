import React, { useState } from 'react';
import Image from './Image';
import './Album.css';

function Album({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageHover = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="album">
      <div className="selected-image">
        <Image src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="image-list">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            onHover={() => handleImageHover(image)} // Use onHover to match the prop name
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
