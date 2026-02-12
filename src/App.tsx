import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import AIAssistant from "./components/AiAssistant";
import ClickSpark from "./components/animation-components/ClickSpark";
import BackToTop from "./components/BackToTop";
import ComingSoon from "./components/ComingSoon";
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
import { ComingSoonProvider, useComingSoon } from "./contexts/ComingSoonContext";

function AppContent() {
  const { isOpen, closeComingSoon } = useComingSoon();

  return (
    <>
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
          <Experience />
          <Testimonials darkMode={false} />
          <Contact darkMode={false} />
          <Footer darkMode={false} />
          <BackToTop />
          <AIAssistant />
        </div>
      </ClickSpark>
      <ComingSoon isOpen={isOpen} onClose={closeComingSoon} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ComingSoonProvider>
        <AppContent />
      </ComingSoonProvider>
    </BrowserRouter>
  );
}

export default App;
