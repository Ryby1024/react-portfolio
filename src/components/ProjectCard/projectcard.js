import React from "react";


const ProjectCard = (props) => {
    return(
        <div className="card horizontal project">
            <div className="card-image">
            <img className="project-picture" src={props.image} alt="" />
            </div>
            <div className="card-stacked">
            <div className="card-content">
                <h4>{props.title}</h4>
                <p>{props.overview}</p>
                <a className="btn" id="learn-more" href={props.github} rel="noopener noreferrer" target="_blank">Learn More</a>
                <a className="btn" id="try-me" href={props.deployment} rel="noopener noreferrer" target="_blank">Try Me</a>
            </div>
            </div>
        </div>

    )
}
export default ProjectCard;