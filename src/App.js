import './App.scss';
import Navbar from './js/navbar';
import Landing from './js/landing';
import Description from './js/description';
import Skills from './js/skills';
import Projects from './js/projects';
import Contact from './js/contact';
import Footer from './js/footer';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>

      <Landing></Landing>

      <Description></Description>

      <Skills></Skills>

      <Projects></Projects>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
