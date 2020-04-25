import React from "react";

const ProjectCard = (props) => {
    return(
        <div className="card">
            <div className="card-image">
            <img className="project-picture" src={props.image} />
            </div>
            <div className="card-content">
                <h4>{props.title}</h4>
                <p>{props.overview}</p>
                <button className="btn waves-effect waves-light" id="learn" onClick={() => props.gitHub()}>Learn More</button>
                <button className="btn waves-effect waves-light" id="try" onClick={() => props.tryProject()}>Try Me</button>
            </div>
        </div>

    )
}
export default ProjectCard;