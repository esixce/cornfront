import React from 'react';

function Image({ src, alt, onHover }) {
  return (
    <img
      src={src}
      alt={alt}
      onMouseEnter={onHover} // Trigger the onHover function on mouse enter
      style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate interactivity
    />
  );
}

export default Image;
