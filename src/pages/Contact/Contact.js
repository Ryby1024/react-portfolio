import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {


    render(){
        return(
            <div className="container"id="header">
                <div>
                <img id="header-pic" src="/images/contact.jpg" alt="" />
                </div>
                <div className="row">
                    <div className="col s12">
                        <h1>Contact Me</h1>
                        
                    </div>
                </div>
                <div className="row"id="email-row">
                    <div className= "col s3">
                        <i className="small material-icons">email</i>
                    </div>
                    <div className="col s3">
                       <p id="email"><a href="mailto: myroy1024@gmail.com"style={{color:"#66F2F7"}} target="blank">myroy1024@gmail.com</a></p>
                    </div>
                </div>
                <div className="row" id="phone-row">
                    <div className="col s3">
                        <i className="small material-icons">phone</i>
                    </div>
                    <div className="col s3">
                        <p id="phone-number"style={{color:"#66F2F7"}}>(407)-461-7433</p>
                    </div>
                </div>
                
                <div className="row" id="github-row">
                    <div className="col s3">
                        <img id="github-icon"src="/images/gitpic3.jpg" alt="" />
                    </div>

                    <div className="col s3">
                        <p id="github-info"><a href="https://github.com/Ryby1024" style={{color:"#66F2F7"}}target="blank">https://github.com/Ryby1024 </a></p>
                    </div>
                </div>

                <div className="row" id="linkedin-row">
                    <div className="col s3">
                        <img id="linkedin-icon" src="/images/linkedin2.png" alt="" />
                    </div>

                    <div className="col s3">
                        <p id="linkedin-info"><a href="https://www.linkedin.com/in/roy-davis-a0457265/" style={{color:"#66F2F7"}} target="blank">https://bit.ly/35rgOaJ</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;