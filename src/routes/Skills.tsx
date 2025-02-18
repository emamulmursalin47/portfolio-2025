/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
// Import React Icons
import { 
  SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiBootstrap,
  SiPhp, SiMysql, SiPython, SiNodedotjs, 
  SiGithub, SiC, SiCplusplus, SiFirebase, SiLinux,
  SiTensorflow, SiJira, SiZendesk, SiMiro,
} from 'react-icons/si';
import { MdOutlineDesignServices, MdStars } from 'react-icons/md';
import { GrCertificate } from 'react-icons/gr';
import { BiCodeAlt, BiGitPullRequest } from 'react-icons/bi';
import { FaProjectDiagram, FaCode, FaCodeBranch } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRefs = useRef([]);
  const progressRefs = useRef([]);
  const certificationRef = useRef(null);
  const toolsRef = useRef(null);
  const githubStatsRef = useRef(null);

  // GitHub username - replace with your own
  const githubUsername = 'emamulmursalin47';

  // Map icons to each skill
  //@ts-ignore
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'NextJS': <SiNextdotjs className="inline-block mr-2 text-lg" />,
      'ReactJS': <SiReact className="inline-block mr-2 text-lg" />,
      'JavaScript': <SiJavascript className="inline-block mr-2 text-lg" />,
      'TailwindCSS': <SiTailwindcss className="inline-block mr-2 text-lg" />,
      'ShadCN': <MdOutlineDesignServices className="inline-block mr-2 text-lg" />,
      'Bootstrap': <SiBootstrap className="inline-block mr-2 text-lg" />,
      'PHP': <SiPhp className="inline-block mr-2 text-lg" />,
      'MySQL': <SiMysql className="inline-block mr-2 text-lg" />,
      'Python': <SiPython className="inline-block mr-2 text-lg" />,
      'Node.js': <SiNodedotjs className="inline-block mr-2 text-lg" />,
      'Scrum (SFC)': <GrCertificate className="inline-block mr-2 text-lg" />,
      'Jira': <SiJira className="inline-block mr-2 text-lg" />,
      'ZenDesk': <SiZendesk className="inline-block mr-2 text-lg" />,
      'Miro': <SiMiro className="inline-block mr-2 text-lg" />,
      'Github': <SiGithub className="inline-block mr-2 text-lg" />,
      'C': <SiC className="inline-block mr-2 text-lg" />,
      'C++': <SiCplusplus className="inline-block mr-2 text-lg" />,
      'Java': <DiJava className="inline-block mr-2 text-lg" />,
      'Firebase': <SiFirebase className="inline-block mr-2 text-lg" />,
      'Linux': <SiLinux className="inline-block mr-2 text-lg" />,
      'YOLOv4': <BiCodeAlt className="inline-block mr-2 text-lg" />,
      'DeepSort': <BiCodeAlt className="inline-block mr-2 text-lg" />,
      'Object Detection': <FaProjectDiagram className="inline-block mr-2 text-lg" />,
      'TensorFlow': <SiTensorflow className="inline-block mr-2 text-lg" />,
    };
    //@ts-ignore
    return iconMap[skillName] || <BiCodeAlt className="inline-block mr-2 text-lg" />;
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'NextJS', level: 70 },
        { name: 'ReactJS', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'ShadCN', level: 80 },
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
      title: 'Tools',
      skills: [
        { name: 'Scrum (SFC)', level: 70 },
        { name: 'Jira', level: 70 },
        { name: 'ZenDesk', level: 95 },
        { name: 'Miro', level: 95 },
      ],
    },
    {
      title: 'Comfortable',
      skills: [
        { name: 'Github', level: 70 },
        { name: 'C', level: 70 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 60 },
        { name: 'Firebase', level: 95 },
        { name: 'Linux', level: 75 },
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

  useEffect(() => {
    // Animate skill category cards
    //@ts-ignore
    skillsRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: 'top center+=100',
            end: 'top center-=100',
            scrub: 1,
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    // Animate progress bars
    progressRefs.current.forEach((ref) => {
      //@ts-ignore
      const width = ref.getAttribute('data-width');
      gsap.fromTo(
        ref,
        { width: '0%' },
        {
          width: `${width}%`,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref,
            start: 'top center+=150',
            end: 'top center',
            scrub: 1,
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    // Animate certifications section
    gsap.fromTo(
      certificationRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: certificationRef.current,
          start: 'top center+=100',
          end: 'top center-=100',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // Animate tools section
    gsap.fromTo(
      toolsRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: toolsRef.current,
          start: 'top center+=100',
          end: 'top center-=100',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // Animate GitHub stats section
    gsap.fromTo(
      githubStatsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: githubStatsRef.current,
          start: 'top center+=100',
          end: 'top center-=100',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  //@ts-ignore
  const addToSkillsRefs = (el) => {
    //@ts-ignore
    if (el && !skillsRefs.current.includes(el)) {
      //@ts-ignore
      skillsRefs.current.push(el);
    }
  };

  //@ts-ignore
  const addToProgressRefs = (el) => {
    //@ts-ignore
    if (el && !progressRefs.current.includes(el)) {
      //@ts-ignore
      progressRefs.current.push(el);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24" id="skills">
      <div className=''>
        <h1 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={addToSkillsRefs}
              className="bg-black/30 backdrop-blur-md rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 flex items-center">
                        {getSkillIcon(skill.name)} {skill.name}
                      </span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        ref={addToProgressRefs}
                        data-width={skill.level}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-1 gap-8">
          <div
            ref={certificationRef}
            className="bg-black/30 backdrop-blur-md rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <GrCertificate className="mr-2 text-lg" /> HTML5/CSS3 Certification
                </h3>
                <p className="text-gray-400">ID: 666629fc...</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <GrCertificate className="mr-2 text-lg" /> Scrum Fundamentals (SFC)
                </h3>
                <p className="text-gray-400">Certified Scrum Developer</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <GrCertificate className="mr-2 text-lg" /> Adobe Illustrator Certification
                </h3>
                <p className="text-gray-400">ID: 64554302...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
        ref={githubStatsRef}
      >
        <h2 className="text-3xl font-bold text-white dark:text-white mb-8 flex items-center">
          <SiGithub className="mr-3 text-2xl" /> GitHub Statistics
        </h2>
        
       
        
        {/* Contribution Calendar */}
        
        
        {/* Activity Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-black/30 backdrop-blur-md rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <BiGitPullRequest className="mr-2 text-purple-400" /> Contribution Activity
          </h3>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=00000000`}
            alt="Activity Graph"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;