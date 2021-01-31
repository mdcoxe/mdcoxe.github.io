import './App.css';
import Navigate from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';



function App() {  
  return (
    <div className="App">
      <Navigate />
      <Home />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
