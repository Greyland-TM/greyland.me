import './App.scss';
import React, { Component } from 'react'
import Navbar from './js/navbar';
import Landing from './js/landing';
import Description from './js/description';
import Skills from './js/skills';
import Projects from './js/projects';
import Contact from './js/contact';
import Footer from './js/footer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
  
        <Landing></Landing>
  
        <Skills></Skills>
  
        <Description></Description>
  
        <Projects></Projects>
  
        <Contact></Contact>
  
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
