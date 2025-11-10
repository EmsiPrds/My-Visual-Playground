import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import About from './components/About';
// import Services from './components/Services';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import ArtGallery from './components/ArtGallery';
// import Process from './components/Process';
// import Testimonials from './components/Testimonials';
// import Blog from './components/Blog';
// import Resume from './components/Resume';
// import Experiences from './components/Experiences';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") !== "false";
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      {/* <About darkMode={darkMode} /> */}
      {/* <Services darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <ArtGallery darkMode={darkMode} />
      <Process darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Resume darkMode={darkMode} />
      <Experiences darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} /> */}
    </div>
  );
}

export default App;
