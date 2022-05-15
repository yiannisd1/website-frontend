import React from "react";
import "./HomeStyles.css";
import data from "../../../assets/project.json";
import { RecordVoiceOver } from "@material-ui/icons";

export default function ProjectBanner() {
    return(
    <div className="projects-container">
        <h2>List of Our Projects</h2>
            {data.projects.map((test)=> {
                return <p key={data.projects.number} className="project-names">Project {test.number}: {test.name}</p> 
            })}
    </div>
    )
}