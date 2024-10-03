import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="nav">
      <li
        onClick={() => navigate("/")}
        className={location.pathname === "/" ? "active" : ""}
      >
        Home
      </li>
      <li
        onClick={() => navigate("/gallery")}
        className={location.pathname === "/gallery" ? "active" : ""}
      >
        Gallery
      </li>
      <li
        onClick={() => navigate("/about")}
        className={location.pathname === "/about" ? "active" : ""}
      >
        About
      </li>
      <li
        onClick={() => navigate("/contact")}
        className={location.pathname === "/contact" ? "active" : ""}
      >
        Contact
      </li>
    </ul>
  );
}

export default Nav;
