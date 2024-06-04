import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner.js';
import { Projects } from './components/Projects.js'
import { Skills } from './components/Skills.js'


function App(){
  return(
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  ) 
}

export default App;
