import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Java Development Intern",
      company: "Coding Samurai",
      duration: "August 2025 - September 2025",
      description: "Worked on various Java-based projects including ATM systems and Quiz applications. Focused on UI/UX using Java Swing and SQL connectivity.",
    },
    {
      role: "C++ Development Intern",
      company: "Apexcify Technologys",
      duration: "September 2025 - October 2025",
      description: "Developed a C++ based Student Management System with features like student registration, attendance tracking, and grade management. Utilized OOP principles and file handling.",
    },
    {
      role: "Frontend Development Intern",
      company: "Afynix Digital",
      duration: "February 2026 - March 2026",
      description: "Completed a 6-week intensive Front-End internship at Afynix Digital, focusing on building high-end, responsive web applications. I successfully developed a premium E-Commerce ecosystem using Vanilla JavaScript and GSAP animations, featuring a persistent cart system and real-time product filtering.",
    },
    {
      role: "Full Stack Learner & Developer",
      company: "Self-Initiatives / Personal Projects",
      duration: "2024 - Present",
      description: "Building responsive web applications using React 19, Tailwind CSS, and Vite. Created multiple portfolio projects and web apps.",
    },
  ];

  return (
    <section id="experience" className="pt-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-[rgb(31,242,144)]">Journey</span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[rgb(31,242,144)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[rgb(31,242,144)] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-[rgb(31,242,144)] font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm font-mono">{exp.duration}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;