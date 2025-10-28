import { Header } from './components/layout/Header/Header';
import { Hero } from './features/Hero/Hero';
import { Projects } from './features/Projects/Projects';

function App() {
  return (
    <>
      <Header />

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
