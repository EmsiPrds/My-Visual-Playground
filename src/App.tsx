import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import AIAssistant from "./components/AiAssistant";
import ClickSpark from "./components/animation-components/ClickSpark";
import Contact from "./components/Contacts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <ClickSpark
        sparkColor="#FFD54F"
        sparkSize={12}
        sparkRadius={25}
        sparkCount={12}
      >
        <div>
          <Navbar />
          <Hero />
          <About darkMode={false} />
          <Services />
          <Skills darkMode={false} />
          <Projects />
          <Gallery darkMode={false} />
          <Experience darkMode={false} />
          <Testimonials darkMode={false} />
          <Contact darkMode={false} />
          <Footer darkMode={false} />
          <AIAssistant />
        </div>
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
