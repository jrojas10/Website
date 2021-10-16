import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Container from 'react-bootstrap/Container'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects';
import Body from './components/body';

function App() {

  return (







    <div className="App">
      <Header />


      <Body/>
      {/* <div className="sections">
        <Hero />
        <Projects />
      </div> */}
      <Footer />

    </div >
  );
}

export default App;
