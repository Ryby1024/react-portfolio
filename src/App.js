import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";


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
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>
      </Router>
    )
  }
}

export default App;
