import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ClickSpark from "./components/animation-components/ClickSpark";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ComingSoonProvider, useComingSoon } from "./contexts/ComingSoonContext";

// Lazy load components that are not immediately visible or are heavy
const Projects = lazy(() => import("./components/Projects"));
const Gallery = lazy(() => import("./components/Gallery"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const AIAssistant = lazy(() => import("./components/AiAssistant"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-20 w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Gallery darkMode={false} />
          </Suspense>
          <Experience />
          <Suspense fallback={<PageLoader />}>
            <Testimonials darkMode={false} />
          </Suspense>
          <Contact darkMode={false} />
          <Footer darkMode={false} />
          <BackToTop />
          <Suspense fallback={null}>
            <AIAssistant />
          </Suspense>
        </div>
      </ClickSpark>
      <Suspense fallback={null}>
        <ComingSoon isOpen={isOpen} onClose={closeComingSoon} />
      </Suspense>
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
