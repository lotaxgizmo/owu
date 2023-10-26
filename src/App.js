import './App.css';
import Hero from './components/Hero';
import Heromob from './components/Heromob';
import About from './components/About';
import Blastoff from './components/Blastoff';
import Anime from './components/Anime';
import Howto from './components/Howto';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Heromob />
      <About />
      <Blastoff />
      <Anime />
      <Howto />
      <Roadmap />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
