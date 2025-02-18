/* eslint-disable @typescript-eslint/ban-ts-comment */
import  { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  const projects = [
    {
      title: 'Online Donation Platform',
      description: 'A full-stack donation platform with real-time updates and payment integration.',
      image: 'https://i.ibb.co.com/PZHPPqqY/Screenshot-2025-02-18-210952.png',
      tags: ['React', 'Node.js', 'TypeScript', 'TailwindCss','Payment Gateway Integration','Responsive Web Design'],
    
      demo: 'https://donation.atcacademy.online/',
    },
    {
      title: 'A Software Academy Website',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://i.ibb.co.com/mC9dbkK6/Screenshot-2025-02-18-211227.png',
      tags: ['ReactJS', 'MySQL', 'TailwindCSS', 'ExpressJS','Framer-motion',''],
      github: '',
      demo: 'https://atcacademy.online/',
    },
    {
      title: 'Bajan Agro Farm',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://i.ibb.co.com/rG42J0qg/Screenshot-2025-02-18-213645.png',
      tags: ['ReactJS', 'TailwindCSS','Framer-motion'],
      github: '',
      demo: 'https://bajanagrofarm.vercel.app/',
    },
    {
      title: 'Cloth Processing System',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://i.ibb.co.com/Z6bbWjjt/Screenshot-2025-02-18-214008.png',
      tags: ['ReactJS', 'TailwindCSS','Framer-motion'],
      github: '',
      demo: 'https://cloth-processing-management.vercel.app/',
    },
    {
      title: 'A Tech Company Portfolio',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://i.ibb.co.com/Y4nQw7ny/Screenshot-2025-02-18-214207.png',
      tags: ['NextJS', 'TailwindCSS','Framer-motion','GSAP'],
      github: '',
      demo: 'https://arviontech.vercel.app/',
    },
    {
      title: 'Prize Bond Checker',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://i.ibb.co.com/gZZjT2Dn/Screenshot-2025-02-18-214523.png',
      tags: ['ReactJS', 'TailwindCSS','Framer-motion'],
      github: '',
      demo: 'https://prizebondchecker.vercel.app/',
    },

    {
      title: 'eApproval System',
      description: 'AI-powered drone surveillance system using YOLOv4 and DeepSort.',
      image: 'https://media.licdn.com/dms/image/v2/D4D2DAQEubY_txu1Wsg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732163717887?e=1740499200&v=beta&t=pyMfB8sMPly0wEgkj-yFG8QPT8fih-VCG8mQ1CAJHXM',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv4'],
      github: 'https://github.com/yourusername/uav-detection',
      demo: 'https://uav-detection.demo.com',
    },
    {
      title: 'Probashi',
      description: 'AI-powered drone surveillance system using YOLOv4 and DeepSort.',
      image: 'https://i.ibb.co.com/YBdTmFQc/Screenshot-2025-02-18-213127.png',
      tags: ['ReactJS', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/uav-detection',
      demo: 'https://probashivi.netlify.app/',
    },
  ];
//@ts-ignore
  const addToProjectRefs = (el) => {
    //@ts-ignore
    if (el && !projectRefs.current.includes(el)) {
      //@ts-ignore
      projectRefs.current.push(el);
    }
  };

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

    // Title animation
    gsap.fromTo(titleRef.current,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center+=100',
          end: 'top center-=100',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // Project cards animation
    projectRefs.current.forEach((project, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      
      gsap.fromTo(
        project,
        {
          x: direction,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: project,
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

  return (
    <div className="container mx-auto px-4 py-32 mt-0 relative" id="projects">
    
      {/* Timeline line */}
      <div 
        ref={timelineRef}
        className="absolute left-1/2 h-full w-px bg-purple-500/30 transform -translate-x-1/2" 
      />
      
      <h1 
        ref={titleRef}
        className="text-4xl font-bold text-white mb-8 relative z-10"
      >
        Featured Projects
      </h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={addToProjectRefs}
            className={`flex flex-col md:flex-row gap-8 relative z-10 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-12">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
              </div>
            </div>
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;