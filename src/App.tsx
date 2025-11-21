import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import AIAssistant from "./components/AiAssistant";
import ClickSpark from "./components/animation-components/ClickSpark";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL CLICK SPARK EFFECT */}
      <ClickSpark
        sparkColor="#FFD54F"
        sparkSize={12}
        sparkRadius={25}
        sparkCount={12}
      >
        {/* EVERYTHING INSIDE HERE GETS THE EFFECT */}
        <div>
          <Navbar />
          <Hero />
          <About darkMode={false} />
          <Services />
          <Skills darkMode={false} />
          <Projects />
          <AIAssistant />
        </div>
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
