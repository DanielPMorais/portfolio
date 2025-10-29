import { Header } from './components/layout/Header/Header';
import { Hero } from './features/Hero/Hero';
import { Projects } from './features/Projects/Projects';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Skills } from './features/Skills/Skills';
import { About } from './features/About/About';

function App() {
  const sectionIds = ['home', 'projects', 'skills', 'about-me'];

  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? '-10% 0px -50% 0px' : '-35% 0px -50% 0px';
  const activeSection = useScrollSpy(sectionIds, threshold);

  return (
    <>
      <Header activeSection={activeSection || 'home'} />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
