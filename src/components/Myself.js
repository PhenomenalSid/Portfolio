import React from "react";
import "./MyselfDesign.css";
import { Link } from "react-router-dom";
import img1 from "../assets/intro-bg.jpg";
import img2 from "../assets/intro-bg.jpg";

export default function Myself() {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            I'm a motherfucking Starboy dkjlfsdlfkjsdlfkjsd;flc sdvjsd vsjd vsdv
            sd;lv sdl vsd vs
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img className="img" src={img1} alt="react" />
            </div>

            <div className="img-stack bottom">
              <img className="img" src={img2} alt="react" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
