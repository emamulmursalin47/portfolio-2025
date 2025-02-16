
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Blog from './Blog';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
 <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      <div className="container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Md. Emamul Mursalin
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-purple-200 mb-8"
            >
              System Architecture Specialist | Full-Stack Developer | AI Innovator
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-300 mb-8 text-lg"
            >
              Crafting innovative solutions at the intersection of system architecture,
              web development, and artificial intelligence. Let's build something amazing together.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors"
                >
                  View Projects <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-400/10 transition-colors"
              >
                Download Resume <Download size={20} />
              </motion.a>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Contact Me <Mail size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg backdrop-blur-lg" />
          </motion.div>
        </div>

        {/* Featured Skills Section */}
       
      </div>
      
    </motion.div>
    <Skills/>
        <Projects/>
        <Experience/>
        <Blog/>
        <Contact/>
    </div>
   
    
  );
};

export default Home;