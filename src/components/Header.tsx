/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { hash: '#home', label: 'Home' },
    { hash: '#projects', label: 'Projects' },
    { hash: '#skills', label: 'Skills' },
    { hash: '#experience', label: 'Experience' },
    { hash: '#blog', label: 'Blog' },
    { hash: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          EM<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(item.hash);
              }}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.hash ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-300" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed top-0 right-0 h-full w-64 bg-purple-950 backdrop-blur-lg p-6 flex flex-col space-y-6 items-center md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
          <X className="w-6 h-6" />
        </button>
        {navItems.map((item) => (
          <a
            key={item.hash}
            href={item.hash}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(item.hash);
              setIsOpen(false);
            }}
            className={`text-lg font-medium transition-colors ${
              activeSection === item.hash ? 'text-purple-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;