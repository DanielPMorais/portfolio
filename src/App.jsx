import { Header } from './components/layout/Header/Header';
import { Hero } from './features/Hero/Hero';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        {/* Próximos passos:
        <Projects />
        <Skills />
        <Contact />
        */}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
