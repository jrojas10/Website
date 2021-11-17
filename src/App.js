import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Contact/Contact';
import Tech from './components/Tech/Tech';


import BG from './components/vfx/BG';

function App() {






  return (
    <div className="App">
      <BG />

      <Header />

      <Intro />
      <Tech />
      <About />
      <ProjectList />
      <Contact />
      <Footer />


    </div >
  );
}

export default App;
