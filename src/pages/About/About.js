import React from "react";
import "../About/about.css"
function About() {
    return (
        <div id="about">
            <h2>Roy Davis</h2>
            <h4>Full Stack Web Developer</h4>
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div id="roy-picture">
                            <img src={"./images/roy.png"} alt="" />
                        </div>
                    </div>

                    <div className="col s5">
                        <div id="about-text">
                            <p>Full Stack Web Developer with extensive retail experience. Graduate of the University of Central Florida Coding Boot Camp with skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, AJax, JSON, Node.js, Express.js, Mysql,
                    Mongo DB and React.js. Degree in Computer IT from  Valencia College. My goal as a developer is to create intuitive user experiences, develop responsive websites, and create visually stunning websites.</p> <p> My background in retail has given me invaluable experience working in a team environment and putting the needs of the customer first.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;