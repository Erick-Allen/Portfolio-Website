import {HashRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from './pages/Experience';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />}/>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>

  );
}

export default App;
