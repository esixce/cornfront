import React, { useEffect } from "react";
import gmapapi from "../../src/creds/gmapapi";
import "./Map.css"; // Import the CSS file

function Map() {
  const YOUR_LATITUDE = 18.903037977323265;
  const YOUR_LONGITUDE = -104.04474721490588;
  const YOUR_ZOOM_LEVEL = 15;

  useEffect(() => {
    const googleScript = document.createElement("script");
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${gmapapi}&libraries=places`;
    googleScript.async = true;
    googleScript.defer = true;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener("load", () => {
      // Now you can use the Google Maps API
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        zoom: YOUR_ZOOM_LEVEL,
      });
    });
  }, [YOUR_LATITUDE, YOUR_LONGITUDE, YOUR_ZOOM_LEVEL]);

  return (
    <div id="map">
      {/* <h2>Location</h2> */}
      <p>r</p>
    </div>
  );
}

export default Map;
