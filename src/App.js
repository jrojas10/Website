import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer />
    </div >
  );
}

export default App;
