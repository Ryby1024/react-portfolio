import React from "react";
import "../About/about.css"




export default class About extends React.PureComponent {


  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="box">

            <div className="title">
              <span className="block"></span>
              <h1>Roy Davis<span></span></h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p>Full Stack Web Developer</p>
            </div>

          </div>
        </div>



        <div className="container" onClick={() => this.componentDidMount()}>
          <div className="row">
            <div className="col s6">
              <div id="roy-picture">
                <img src={"./images/roy.png"} alt="" />
              </div>
            </div>

            <div className="col s6">
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
}
