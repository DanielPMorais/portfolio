import { Header } from './components/layout/Header/Header';
import { Hero } from './features/Hero/Hero';
import { Projects } from './features/Projects/Projects';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Skills } from './features/Skills/Skills';
import { About } from './features/About/About';
import { Footer } from './components/layout/Footer/Footer';
import { useEffect, useState } from 'react';
import { Loader } from './components/common/Loader/Loader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionIds = ['home', 'projects', 'skills', 'about-me'];

  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? '-8% 0px -50% 0px' : '-28% 0px -50% 0px';
  const activeSection = useScrollSpy(sectionIds, threshold);

  useEffect(() => {
    const markLoaded = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      markLoaded();
    } else {
      window.addEventListener('load', markLoaded, { once: true });
    }

    return () => {
      window.removeEventListener('load', markLoaded);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoaded]);

  return (
    <>
      <div
        className={`app-loader-backdrop${isLoaded ? ' app-loader-hidden' : ''}`}
        aria-busy={!isLoaded}
        aria-live="polite"
      >
        <div className="app-loader-spinner" />
      </div>
      <Header activeSection={activeSection || 'home'} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
