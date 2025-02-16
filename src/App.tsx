
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Experience from './routes/Experience';
import Blog from './routes/Blog';
import Home from './routes/Home';
import Contact from './routes/Contact';


function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <ParticlesBackground />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;