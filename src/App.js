import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import ProjectCard from "./components/ProjectCard/projectcard";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";


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
          <About />
        </Route>
      </Router>
    )
  }
}

export default App;
