import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:emamulmursalin.ice@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-md text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              EM<span className="text-purple-500">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              System Architecture Specialist & Full-Stack Developer crafting innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Rajshahi, Bangladesh</p>
            <p className="text-gray-400">emamulmursalin.ice@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Md. Emamul Mursalin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;