import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Body from './components/body';
import About from './components/About/About';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Conact/Contact';

function App() {

  return (







    <div className="App">
      <Header />


      <Body/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer />

    </div >
  );
}

export default App;
