import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Container from 'react-bootstrap/Container'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Hero />
        <Projects />
      </div>
      <Footer />

    </div >
  );
}

export default App;
