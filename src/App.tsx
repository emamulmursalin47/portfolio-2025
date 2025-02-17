import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Experience from './routes/Experience';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-gradient-to-br overflow-x-hidden from-gray-100 via-purple-100 to-violet-100 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;