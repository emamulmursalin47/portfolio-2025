/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import  { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineRef = useRef(null);
  const experienceRefs = useRef([]);
  const leadershipRefs = useRef([]);

  const experiences = [
    {
      title: 'System Architecture Specialist',
      company: 'ATC Tech Ltd',
      period: '2025 - Present',
      description: 'Leading system architecture design and implementation for enterprise solutions.',
      achievements: [
        'Designed and implemented scalable, high-performance IT system architectures to meet business needs.',
        'Developed system models, workflows, and integration strategies to optimize infrastructure efficiency.',
        'Led the evaluation and adoption of emerging technologies to enhance system security and reliability.',
        'Conducted performance analysis and troubleshooting to identify and resolve system bottlenecks.',
        'Collaborated with cross-functional teams to design and integrate complex IT solutions.',
        'Provided technical leadership and mentorship to developers and IT teams on architecture best practices.'
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Sr. Executive Officer',
      company: 'ATC Tech Ltd',
      period: '2024 - 2025',
      description: 'Managed technical operations and development projects.',
      achievements: [
        'Developed and maintained websites using HTML, CSS, JavaScript, React.js PHP, and MySQL.',
        'Implemented responsive design to ensure websites are mobile-friendly. ',
        'Collaborated with senior developers to troubleshoot and resolve technical issues',
        'Provided Technical Support and training to clients and team members.'
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
        'CGPA: 3.35/4.00',
      
      ],
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const leadership = [
    {
      title: 'Organizing Secretary',
      organization: 'BAUET ICT Club',
      period: '2023',
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
    {
      title: 'Joint Secretary',
      organization: 'BAUET Career Club',
      period: '2022 - 2023',
      description: 'Coordinated international entrepreneurship competition events.',
      icon: <Award className="w-6 h-6" />,
    },
  ];
  useEffect(() => {
    // Timeline animation
    gsap.from(timelineRef.current, {
      height: 0,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        toggleActions: 'play reverse play reverse'
      }
    });

    // Experience items animations
    experienceRefs.current.forEach((item, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      
      gsap.fromTo(
        item,
        {
          x: direction,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            end: 'top center-=100',
            scrub: 1,
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    // Leadership items animations
    
    leadershipRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            end: 'top center-=100',
            scrub: 1,
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
//@ts-ignore
  const addToExperienceRefs = (el) => {
    //@ts-ignore
    if (el && !experienceRefs.current.includes(el)) {
      //@ts-ignore
      experienceRefs.current.push(el);
    }
  };
//@ts-ignore
  const addToLeadershipRefs = (el) => {
    //@ts-ignore
    if (el && !leadershipRefs.current.includes(el)) {
      //@ts-ignore
      leadershipRefs.current.push(el);
    }
  };

  return (
    <div className="container mx-auto px-4 py-32" id="experience">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-12">Experience & Education</h1>

        <div className="relative">
          {/* Timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-0 md:left-1/2 h-full w-px bg-purple-500/30 transform -translate-x-1/2" 
          />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={addToExperienceRefs}
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
              </div>
            ))}
          </div>

          {/* Leadership section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Leadership Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((role, index) => (
                <div
                  key={index}
                  ref={addToLeadershipRefs}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;