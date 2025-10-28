import { Header } from './components/layout/Header/Header';
import { Hero } from './features/Hero/Hero';
import { Projects } from './features/Projects/Projects';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sectionIds = ['home', 'projects', 'skills', 'about-me'];
  const activeSection = useScrollSpy(sectionIds, '-22% 0px -50% 0px');

  return (
    <>
      <Header activeSection={activeSection || 'home'} />

      <main>
        <Hero />
        <Projects />
        {/* Próximos passos:
        <Skills />
        <Contact />
        */}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
