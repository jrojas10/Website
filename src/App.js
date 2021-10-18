import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Body from './components/body';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {

  return (







    <div className="App">
      <Header />


      <Body/>
      <About/>
      <Projects/>
      {/* <div className="sections">
        <Hero />
        <Projects />
      </div> */}
      <Footer />

    </div >
  );
}

export default App;
