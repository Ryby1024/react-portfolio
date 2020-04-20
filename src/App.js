import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import ProjectCard from "./components/ProjectCard/projectcard";

class App extends Component {

  state = {
    project: "",
    title: "",
    overview: ""

  }

  render(){
    return(
      <div>
        <ProjectCard 
        title="Hello World"
        />
      </div>
    )
  }
}

export default App;
