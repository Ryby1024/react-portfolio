import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import ProjectCard from "./components/ProjectCard/projectcard";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {

  state = {
    project: "",
    title: "",
    overview: ""

  }

  render(){
    return(
      <Router>
        <Navbar />
        <Route exact path="/">
          
        </Route>
      </Router>
    )
  }
}

export default App;
