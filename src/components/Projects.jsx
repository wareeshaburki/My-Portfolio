import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectData = [
    {
      title: "University Management System",
      image: "/RMS.jpg",
      category: "Java",
      tech: "Java, Java Swing, SQL",
      link: "https://github.com/wareeshaburki/University-Management-System",
    },
    {
      title: "Camper Cafe",
      image: "/camperCafe.jpg",
      category: "Web",
      tech: "HTML, CSS",
      link: "https://github.com/wareeshaburki/Camper-Cafe",
    },
    {
      title: "Clothiverse",
      image: "/clothiverse.jpg",
      category: "Web",
      tech: "HTML, CSS",
      link: "https://github.com/wareeshaburki/Clothiverse",
    },
    {
      title: "Library Management System",
      image: "/studentGradeManagement.jpg",
      category: "C#",
      tech: "C# and File Handling",
      link: "https://github.com/wareeshaburki/C-/blob/main/LibraryManagementSystem.zip",
    },
    {
      title: "Quiz Application",
      image: "/quiz-app.jpg",
      category: "Java",
      tech: "Java, Java Swing, SQL",
      link: "https://github.com/wareeshaburki/CODING-SAMURAI-INTERNSHIP-TASKS./blob/main/QuizApplication.zip",
    },
    {
      title: "Book Explorer Application",
      image: "/bookExplorer.jpg",
      category: "Web",
      tech: "React JS, CSS, Books API",
      link: "https://github.com/wareeshaburki/book-explorer-app",
    },
    {
      title: "Student Grade Management System",
      image: "/studentGradeManagement.jpg",
      category: "C#",
      tech: "C#",
      link: "https://github.com/wareeshaburki/C-/blob/main/StudentGradeManagementSystem.zip",
    },
    {
      title: "Weather Application",
      image: "/weatherApp.jpg",
      category: "Web",
      tech: "React JS, CSS, Weather API",
      link: "https://github.com/wareeshaburki/Weather-App-Using-React-JS",
    },
    {
      title: "Bite Book",
      image: "/biteBook.jpg",
      category: "Web",
      tech: "HTML, CSS, Vanilla JS, Recipe Finder API",
      link: "https://github.com/wareeshaburki/Bite-Book-Recipe-finder-app",
    },
    {
      title: "Calculator",
      image: "/calculator.jpg",
      category: "Java",
      tech: "Java, Java Swing",
      link: "https://github.com/wareeshaburki/CODING-SAMURAI-INTERNSHIP-TASKS./blob/main/Calculator.java",
    },
    {
      title: "Group Chat Application",
      image: "/chatApplication.jpg",
      category: "Java",
      tech: "Java, Java Swing, Multithreading, Socket Programming",
      link: "https://github.com/wareeshaburki/CODING-SAMURAI-INTERNSHIP-TASKS./blob/main/ChatApplication.zip",
    },
    {
      title: "Automated Teller Machine",
      image: "/atm.jpeg",
      category: "Java",
      tech: "Java, Java Swing",
      link: "https://github.com/wareeshaburki/CODING-SAMURAI-INTERNSHIP-TASKS./blob/main/ATM.zip",
    },
    {
      title: "Client's PortFolio",
      image: "/client.jpeg",
      category: "Web",
      tech: "React JS, Tailwind CSS",
      link: "https://github.com/wareeshaburki/Soban_Munir_Portfolio",
    },
    {
      title: "AETHER | Premium Tech Ecosystem",
      image: "/aether.png",
      category: "Web",
      tech: "Vanilla JS, GSAP, LocalStorage",
      link: "https://wareeshaburki.github.io/Afynix-Internship-week-5/",
      description:
        "Final Capstone Project featuring advanced filtering and persistent cart logic.",
    },
    {
      title: "Modern Landing Page",
      image: "/landing.png",
      category: "Web",
      tech: "HTML, CSS (Flexbox/Grid)",
      link: "https://wareeshaburki.github.io/Afynix-Internship-week-2/",
      description:
        "Responsive and visually polished landing page built during the initial weeks of internship.",
    },
  ];

  const categories = ["All", "Web", "Java", "C#"];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="scroll-mt-20 pt-15 md:pt-25 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[rgb(31,242,144)]">Projects</span>
          </h2>
          <p className="text-gray-400">
            A collection of my best work in software and web development.
          </p>
        </div>
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === cat
                  ? "bg-[rgb(31,242,144)] text-black font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[rgb(31,242,144)] transition-all"
          >
            <div className="h-48 relative overflow-hidden bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-[rgb(31,242,144)] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[rgb(31,242,144)] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                Built with: {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(31,242,144)] text-sm font-bold hover:underline"
              >
                View Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
