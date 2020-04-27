import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard/projectcard";
import "./portfolio.css";
class Portfolio extends Component {

    state= {
        projects: [],
        id: 0,
        title: "",
        overview: "",
        image: ""
    }
    componentDidMount() {
        this.setProjects();
    }

    projects = [
        {
            id: 1,
            title: "Brew Finder",
            overview: "Location finder for closest brewerys to current locale. It uses HTML5, Javascript, CSS3, JQuery, Bootstrap, AJAX, and the Here Maps API as well as the Open Brewery DB API. The Guardian API was also used for the carousel.",
            image: "./images/beer.jpg"
        },
        {
            id: 2,
            title: "Cash Money",
            overview: "Full-stack application where users can create a budget, track spending, and plan for upcoming bills. To start, the user will only be allowed access to the Register or Login pages. Upon registering as a new user or logging in as an existing user, they will be able to access all of the application's pages. They will also have a personalized greeting with their first name printed to the navbar for all subsequent pages. This application uses HTML5, CSS3, Javascript, Bootstrap4, React.js, MongoDB, Mongoose, Express.js, Node.js, Axios, React Chartjs2, and FullCalendar.",
            image: "./images/money.jpg"
        },

        {
            id: 3,
            title: "unWrapped",
            overview: "A party planning web application that allows users to create and rsvp to parties while also keeping track of guests, gifts and if they sent a thank you note. This application uses HTML5, CSS3, Javascript, Bootstrap4, JQuery, MySql, Sequalize, Express.js, Node.js, Express-handlebars and Randomatic.",
            image: "./images/gift.jpg"
        },

        {
            id: 4,
            title: "Friend Finder",
            overview: "To use this app, a user must answer 10 survey questions. The answers range from 1 (Strongly Disagree) and go to 5 (Strongly Agree). Based on the responses the user gives, the app will match them with someone that most closely fits with the answers they gave. This application uses HTML5, CSS3, Javascript, JQuery, Bootstrap4, and Express.js.",
            image: "./images/love.jpg"
        },

        {
            id: 5,
            title: "Scraped",
            overview: "An app that scrapes the technology section of the New York Times. It uses HTML5, Javascript, CSS3, Materialize, JQuery, Mongoose, Mongo DB, Handlebars.js, Express.js and Node.js.",
            image: "./images/paper.jpg"
        },

        {
            id: 6,
            title: "Bamazon",
            overview: "This app allows users to preview items for sale or purchase an item from the list of available items that are stored in a mysql database we created. There is also a manager function that allows you to keep tabs on the 'business'. This application uses Javascript, Node.js, JQuery and MySql.",
            image: "./images/bamazon.jpg"
        }
    ]
    setProjects = () => {
        let newProjects = this.projects;
        console.log(newProjects)
        this.setState({
            projects: newProjects
        })
    }
    
    get myProjects(){
        const {projects} = this.state
        console.log(projects)
        if (Array.isArray(projects)){
            return projects.map(project => {
                console.log("hello")
                return <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                overview={project.overview}
                image={project.image}
                />
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {this.myProjects}}
                    </div>
                </div>

            </div>
            
        )
    }
}
export default Portfolio;