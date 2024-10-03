import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <div className="property-details">
      <h2>Property Details</h2>
      <ul>
        <li>
          <span className="label">Size:</span> Approximately 10 acres (4 hectares)
        </li>
        <li>
          <span className="label">Location:</span> Cuyutlan, Colima, Mexico
        </li>
        <li>
          <span className="label">Price:</span> $1.5 Million USD
        </li>
      </ul>
    </div>
  );
};

export default Details;
