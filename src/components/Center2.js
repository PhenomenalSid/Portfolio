import React from "react";
import "./Center2Design.css";

export default function Center2(props) {
  return (
    <>
      <div className="center-img">
        <div className="heading">
          <h1>{props.heading}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}
