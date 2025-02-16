import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'System Architecture',
                description: 'Designing scalable and efficient systems',
                percentage: 90,
              },
              {
                title: 'Full-Stack Development',
                description: 'Building end-to-end web applications',
                percentage: 85,
              },
              {
                title: 'AI/ML Integration',
                description: 'Implementing intelligent solutions',
                percentage: 80,
              },
              {
                title: 'Technical Leadership',
                description: 'Leading teams and projects',
                percentage: 85,
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                className="bg-black/30 backdrop-blur-md p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 + 1.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  />
                </div>
                <p className="text-right text-purple-400 mt-2">{skill.percentage}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;