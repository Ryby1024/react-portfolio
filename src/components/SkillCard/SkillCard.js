import React from "react";

const SkillCard = (props) => {
    return(
        <div className="col s3">
        <div className="card skill-card">
            <div className="card-image">
                <img className="skill-icon responsive-img" src={props.image} alt="" />
            </div>
            <div className="card-content skillName">
                <p className="skill-title">{props.name}</p>
            </div>
        </div>
        </div>
    )
}
export default SkillCard;