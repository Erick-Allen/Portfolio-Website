import {HashRouter, Routes, Route, useLocation} from "react-router-dom"

import Home from './pages/Home';
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from "./components/Navbar";
import './App.css';

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/projects/");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDisplay />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <Layout />
      </HashRouter>
    </div>

  );
}

export default App;
