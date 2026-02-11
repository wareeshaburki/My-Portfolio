import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col text-center pt-20 px-6 overflow-hidden justify-center items-center bg-black relative min-h-screen"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[rgb(31,242,144)] blur-[120px] opacity-20 rounded-full"></div>
      <div className="relative z-10 max-w-4xl">
        <p className="text-[rgb(31,242,144)] uppercase font-mono text-sm mb-4 tracking-widest">
          Aspiring Full Stack Developer
        </p>
        <h1 className="font-black tracking-tight text-white mb-6 text-4xl md:text-7xl">
          Building solutions with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(31,242,144)] to-white">
            code & creativity.
          </span>
        </h1>
        <p className="text-gray-400 mb-10 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
          Hi, I'm Wareesha. I specialize in React, Java, and C++. I love turning
          complex problems into simple, beautiful, and scalable digital
          experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/WAREESHA BURKI.pdf"
            download="Wareesha Burki"
            className="rounded-xl hover:scale-105 transition-transform bg-[rgb(31,242,144)] text-black shadow-[0_0_20px_rgba(31,242,144,0.5)] px-8 py-4 font-bold "
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-gray-600 rounded-xl py-4 px-8 font-bold hover:bg-white/5"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
