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
      title: 'Amazon Clone',
      description: 'A full-stack e-commerce platform with real-time updates and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800',
      tags: ['React', 'Node.js', 'Firebase', 'Stripe'],
      github: 'https://github.com/yourusername/amazon-clone',
      demo: 'https://amazon-clone.demo.com',
    },
    {
      title: 'Pharmacy Management System',
      description: 'Comprehensive solution for inventory management and prescription tracking.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      github: 'https://github.com/yourusername/pharmacy-system',
      demo: 'https://pharmacy-system.demo.com',
    },
    {
      title: 'UAV Object Detection',
      description: 'AI-powered drone surveillance system using YOLOv4 and DeepSort.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv4'],
      github: 'https://github.com/yourusername/uav-detection',
      demo: 'https://uav-detection.demo.com',
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