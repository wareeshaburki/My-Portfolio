import React from "react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 px-6 max-w-7xl bg-black mx-auto">
      <div className="mb-12">
        <h2 className="text-[rgb(31,242,144)] mb-4 font-bold text-3xl md:text-5xl">
          About <span className="text-white">Me</span>
        </h2>
        <div className="bg-[rgb(31,242,144)] h-1 w-20 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 py-8 px-10 bg-white/6 border border-white/20 rounded-3xl">
          <h3 className="font-bold text-xl text-[rgb(31,242,144)]">My Story</h3>
          <p className="text-gray-400 text-lg my-3">
            I’m a developer who loves the challenge of turning a blank screen
            into a functional digital solution. With a solid foundation in{" "}
            <span className="font-bold text-white">Java and C++</span>, I’ve
            transitioned into the world of{" "}
            <span className="font-bold text-white">Frontend Development </span>
            with React. I focus on writing clean, scalable code and creating
            user interfaces that feel intuitive.
          </p>
        </div>
        <div className="flex flex-col text-center justify-center items-center py-8 px-10 bg-white/6 border border-white/20 rounded-3xl">
          <h2 className="text-4xl font-bold py-2">2</h2>
          <p className="text-gray-500 font-bold uppercase text-sm">
            Years of learning and internships
          </p>
        </div>
        <div className="flex flex-col text-center justify-center items-start py-8 px-10 bg-gradient-to-br from-[rgb(31,242,144)]/10 to-transparent border border-white/20 rounded-3xl">
          <h1 className="font-bold text-xl mb-6">Tech Stack</h1>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "Tailwind",
              "Java",
              "C++",
              "SQL",
              "C#",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs text-white hover:bg-[rgb(31,242,144)] hover:text-black bg-white/8 px-4 py-2 border border-white/10 rounded-full transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col text-center justify-center items-start py-8 px-10 bg-white/6 border border-white/20 rounded-3xl">
          <h1 className="font-bold text-[rgb(31,242,144)] text-xl mb-6">
            What I focus on
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[rgb(31,242,144)]"></span>
              Responsive Web Design
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[rgb(31,242,144)]"></span>
              OOP & Software Architecture
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[rgb(31,242,144)]"></span>
              Database Management
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[rgb(31,242,144)]"></span>
              UI/UX Principles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
