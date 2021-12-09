import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Intro from './components/Intro/Intro';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Contact/Contact';
import Tech from './components/Tech/Tech';



import { Route } from 'react-router-dom';

function App() {






  return (

    <Route exact path="/" >
      <div className="App">

        <Header />
        <Intro />
        <Tech />
        <ProjectList />
        <Contact />
        <Footer />


      </div >
    </Route>
  );
}

export default App;
