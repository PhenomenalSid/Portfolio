import React from "react";
import "./CenterDesign.css";
import BGimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export default function Center() {
  return (
    <>
      <div className="center">
        <div className="bg-img">
          <img className="img" src={BGimg} alt="BGimg" />
        </div>

        <div className="content">
          <p>HI, I AM A WEB DEVELOPER</p>
          <h1>REACT DEVELOPER</h1>
          <div className="buttons">
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
