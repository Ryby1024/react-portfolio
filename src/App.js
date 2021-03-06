import React, {Component} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
class App extends Component {

  render(){
    return(
      <Router>
        <Navbar />
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Portfolio />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
     
    )
  }
}

export default App;
