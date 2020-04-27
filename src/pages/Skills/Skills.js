import React, {Component} from "react";
import SkillCard from "../../components/SkillCard/SkillCard";
import "./skills.css";

class Skills extends Component{

    state = {
        skills: [],
        name: "",
        image: ""
    }
    componentDidMount(){
        this.setSkills();
    }

    skills = [
        {
            id: 1,
            name: "HTML",
            image: "./images/html5.png",
        },    
        {
            id: 2,
            name: "CSS",
            image: "./images/css3.png",
  
        },    
        {
            id: 3,
            name: "Bootstrap",
            image: "./images/bootstrap4.png",

        },    
        {
            id: 4,
            name: "JavaScript",
            image: "./images/js.png",
  
        },    
        {
            id: 5,
            name: "jQuery",
            image: "./images/jquery.png",

        },    
        {
            id: 6,
            name: "Node.js",
            image: "./images/node.png",
  
        },    
        {
            id: 7,
            name: "Express",
            image: "./images/express.jpg",

        },    
        {
            id: 8,
            name: "Handlebars",
            image: "./images/handlebar.png",
        },    
        {
            id: 9,
            name: "MySQL",
            image: "./images/sql.png",

        },    
        {
            id: 10,
            name: "MongoDB",
            image: "./images/mongodb.jpg",
        },
        {
            id: 11,
            name: "React.js",
            image: "./images/react.jpg",

        },
        {
            id: 12,
            name: "PHP",
            image: "./images/php.png",
        }
    ]

    setSkills = () => {
        let newSkills = this.skills;
        console.log(newSkills)
        this.setState({
            skills: newSkills
        })
    }

    get mySkills(){
        const {skills} = this.state
        console.log(skills)
        if (Array.isArray(skills)){
            return skills.map(skill => {
                console.log("hello")
                return <SkillCard
                key={skill.id}
                id={skill.id}
                name={skill.name}
                image={skill.image}
                />
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                {this.mySkills}
                </div>
            </div>
        )
    }

}
export default Skills;