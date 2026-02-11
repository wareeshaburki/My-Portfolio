import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.linkedin.com/in/wareesha-burki-b34538317/" className="text-gray-400 hover:text-[rgb(31,242,144)] transition-colors">LinkedIn</a>
          <a href="https://github.com/wareeshaburki" className="text-gray-400 hover:text-[rgb(31,242,144)] transition-colors">GitHub</a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Wareesha Burki. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;