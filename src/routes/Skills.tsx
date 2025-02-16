import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Node.js', level: 70 },
      ],
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'YOLOv4', level: 80 },
        { name: 'DeepSort', level: 75 },
        { name: 'Object Detection', level: 85 },
        { name: 'TensorFlow', level: 70 },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-black/30 backdrop-blur-md rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white">HTML5/CSS3 Certification</h3>
                <p className="text-gray-400">ID: 666629fc...</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Scrum Fundamentals (SFC)</h3>
                <p className="text-gray-400">Certified Scrum Developer</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white">Adobe Illustrator Certification</h3>
                <p className="text-gray-400">ID: 64554302...</p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'GitHub',
                'Linux',
                'Adobe Illustrator',
                'SEO',
                'Docker',
                'AWS',
                'Figma',
                'VS Code',
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;