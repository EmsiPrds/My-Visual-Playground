import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import AIAssistant from "./components/AiAssistant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <About darkMode={false} />
        <Services />
        <Skills darkMode={false} />
        {/* <Projects darkMode={darkMode} />
        <ArtGallery darkMode={darkMode} />
        <Process darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Blog darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Experiences darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} /> */}
        <AIAssistant />
      </div>
    </BrowserRouter>
  );
}

export default App;
