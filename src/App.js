import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;