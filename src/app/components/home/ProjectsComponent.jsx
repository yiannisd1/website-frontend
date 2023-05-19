import React from "react";
import "./HomeStyles.css";
import data from "../../../assets/project.json";
import { RecordVoiceOver } from "@material-ui/icons";

export default function ProjectBanner() {
  const projects = data.projects;

  const sortedProjects = projects.sort((a, b) => {
    if (a.number === 6 || a.number === 12) {
      return 1;
    } else if (b.number === 6 || b.number === 12) {
      return -1;
    } else if (a.number % 6 === 0) {
      return -1;
    } else if (b.number % 6 === 0) {
      return 1;
    } else if (a.number % 6 === b.number % 6) {
      return a.number - b.number;
    } else {
      return a.number % 6 - b.number % 6;
    }
  });

  return (
    <div className="projects-container">
      <h2 className="project-title">List of Our Projects</h2>
      <div className="project-list">
        {sortedProjects.map((project) => (
          <div key={project.number} className="project">
            <p className="project-number">Project {project.number}:</p>
            <p className="project-name">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}  
