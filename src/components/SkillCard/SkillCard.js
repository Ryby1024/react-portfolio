import React from "react";

const SkillCard = (props) => {
    return(
        <div className="col s3">
        <div className="card skill-card">
            <div className="card-image">
                <img className="skill-icon" src={props.image} alt="" />
            </div>
            <div className="card-content skillName">
                <h4 className="skill-title">{props.name}</h4>
            </div>
        </div>
        </div>
    )
}
export default SkillCard;