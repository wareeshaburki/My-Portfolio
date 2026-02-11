import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="text-2xl uppercase tracking-tighter font-bold text-[rgb(31,242,144)]">
        Wareesha<span className="text-white">.B</span>
      </div>
      <div className="hidden md:flex font-medium text-sm items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-[rgb(31,242,144)] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://www.linkedin.com/in/wareesha-burki-b34538317/"
          className="bg-[rgb(31,242,144)] text-black px-6 py-2 transition-all rounded-full font-bold hover:shadow-[0_0_20px_rgba(31,242,144,0.5)]"
        >
          Check out my Linkedin ⬈
        </a>
      </div>
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <div className="md:hidden top-20 left-0 w-full absolute bg-black/95 border-b border-white/10 py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-400 text-lg hover:text-[rgb(31,242,144)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/wareesha-burki-b34538317/"
            className="text-[rgb(31,242,144)] font-bold hover:text-gray-400"
          >
            Linkedin ⬈
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
