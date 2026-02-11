import React from 'react'
import "./index.css";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-black text-white selection:bg-[rgb(31,242,144)] selection:text-black">
      <Navbar />
      <main>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;