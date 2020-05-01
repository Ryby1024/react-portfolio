import React from "react";


const ProjectCard = (props) => {
    return(
        <div className="card horizontal project">
            <div className="card-image">
            <img className="project-picture responsive-img" src={props.image} alt="" />
            </div>
            <div className="card-stacked">
            <div className="card-content">
                <p className="title">{props.title}</p>
                <p className="description">{props.overview}</p>
                <a className="btn learn-more" href={props.github} rel="noopener noreferrer" target="_blank">Learn More</a>
                <a className="btn try-me" href={props.deployment} rel="noopener noreferrer" target="_blank">Try Me</a>
            </div>
            </div>
        </div>

    )
}
export default ProjectCard;