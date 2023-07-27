import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarDesign.css";

export default function Navbar() {
  const [color, setColor] = useState(false);

  const changecolor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changecolor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
