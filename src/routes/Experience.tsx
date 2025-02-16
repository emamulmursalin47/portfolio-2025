import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'System Architecture Specialist',
      company: 'ATC Tech Ltd',
      period: '2024 - Present',
      description: 'Leading system architecture design and implementation for enterprise solutions.',
      achievements: [
        'Optimized system performance by 40%',
        'Led team of 5 developers',
        'Implemented microservices architecture',
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Executive Officer',
      company: 'ATC Tech Ltd',
      period: '2023 - 2024',
      description: 'Managed technical operations and development projects.',
      achievements: [
        'Developed AI-driven UAV detection system',
        'Reduced deployment time by 60%',
        'Implemented CI/CD pipeline',
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Technical Content Writer',
      company: 'Team Wright',
      period: '2020 - 2023',
      description: 'Created technical documentation and tutorials for developers.',
      achievements: [
        'Published 100+ technical articles',
        'Increased readership by 200%',
        'Developed style guide',
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'B.Sc. in ICE',
      company: 'BAUET',
      period: '2020 - 2024',
      description: 'Bachelor of Science in Information & Communication Engineering',
      achievements: [
        'CGPA: 3.92/4.00',
        'President of ICT Club',
        'Published research paper on UAV detection',
      ],
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const leadership = [
    {
      title: 'Organizing Secretary',
      organization: 'BAUET ICT Club',
      period: '2023 - 2024',
      description: 'Led organization of technical events and workshops.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Event Management Officer',
      organization: 'Hult Prize BAUET',
      period: '2022 - 2023',
      description: 'Coordinated international entrepreneurship competition events.',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-12">Experience & Education</h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-purple-500/30 transform -translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1" />
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center z-10">
                    {exp.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Leadership Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="bg-black/30 backdrop-blur-md p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{role.title}</h3>
                      <p className="text-purple-400">{role.organization}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2">{role.period}</p>
                  <p className="text-gray-300">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;