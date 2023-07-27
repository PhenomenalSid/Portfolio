import React from "react";
import "./ProjectsDesign.css";

import ProjectCardData from "./ProjectsData";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {ProjectCardData.map((val, ind) => {
            return (
              <ProjectsCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
