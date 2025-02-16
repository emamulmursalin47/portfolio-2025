/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRefs = useRef([]);
  const progressRefs = useRef([]);
  const certificationRef = useRef(null);
  const toolsRef = useRef(null);

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
    <div className="container mx-auto px-4 py-24">
      <div>
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
                      <span className="text-gray-300">{skill.name}</span>
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={certificationRef}
            className="bg-black/30 backdrop-blur-md rounded-xl p-6"
          >
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

          <div
            ref={toolsRef}
            className="bg-black/30 backdrop-blur-md rounded-xl p-6"
          >
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
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;