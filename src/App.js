import './App.scss';
import React, { useState, Component } from 'react'
import Navbar from './js/navbar';
import Landing from './js/landing';
import Description from './js/description';
import Skills from './js/skills';
import Projects from './js/projects';
import Contact from './js/contact';
import Footer from './js/footer';

// class App extends Component {
//   state = {
//     theme: 'dark'
//   }



//   render() {
//     return (
      // <div className="container">
      //   <Navbar></Navbar>
  
      //   <Landing></Landing>
  
      //   <Skills></Skills>
  
      //   <Description></Description>
  
      //   <Projects></Projects>
  
      //   <Contact></Contact>
  
      //   <Footer></Footer>
      // </div>
//     );
//   }
// }


import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './js/modeChanger.js/theme';
import { GlobalStyles } from './js/modeChanger.js/global';

function App() {
  
const [theme, setTheme] = useState('Light');

// The function that toggles between themes
const toggleTheme = () => {
  if (theme === 'Light') {
    setTheme('Dark');
  } else {
    setTheme('Light');
  }
  console.log('toggleTheme Called');
}
  return (
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
    
        <GlobalStyles />

        <div className="container">
          <div className="nav-container">
            <div className="navbar">
                <div className="toggle-container">
                    <label className="switch">
                        <input  onClick={toggleTheme} type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <p className="toggle-container__lable">{theme} Mode</p>
                </div>

                <ul className="navbar__list">
                    <li className="navbar__item">Home</li>
                    <li className="navbar__item">Skills</li>
                    <li className="navbar__item">About me</li>
                    <li className="navbar__item">Projects</li>
                    <li className="navbar__item">Contact</li>
                </ul>
            </div>
        </div>
  
        <Landing></Landing>
  
        <Skills></Skills>
  
        <Description></Description>
  
        <Projects></Projects>
  
        <Contact></Contact>
  
        <Footer></Footer>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
