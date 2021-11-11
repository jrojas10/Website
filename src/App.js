import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Contact/Contact';



import FadeIn from './examples/FadeIn';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
      <Header />
      <Intro/>
      <About/>
      <FadeIn>
      <ProjectList/>
      </FadeIn>
      <Contact/>
      <Footer />
        </Route>


        {/* fade test */}
        <Route path="/test">
          <Header />
          
          <Footer/>
        </Route>

      </Switch>
    </div >
  );
}

export default App;
