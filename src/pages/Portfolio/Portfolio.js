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
                    <div className="col s4">
                        {this.myProjects}}
                    </div>
                </div>

            </div>
            
        )
    }
}
export default Portfolio;