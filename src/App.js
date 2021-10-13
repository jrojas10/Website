import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Body from './components/Body';


function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route path="/" exact>
          <h2> Home</h2>
          <a href="http://localhost:3000/about" >About me</a>
          <Body />

        </Route>

        <Route path="/about">

          <h2> About Me</h2>
          <a href="http://localhost:3000/">Home</a>


        </Route>


      </Switch>

      <Footer />
    </div >
  );
}

export default App;
