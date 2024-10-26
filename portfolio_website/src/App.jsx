import React from 'react';
import styles from "./app.module.css";
import { Navbar } from "./Components/navbar/navbar";
import {User} from "./Components/user/user";
import{About} from "./Components/about/about";
import {Experience} from "./Components/experience/experience";
import {Projects} from "./Components/projects/projects";
import {Contact} from "./Components/contact/contact";
import {slides} from "./data/highlight.json";

function App(){
  return (
    <div className= {styles.App}>
      <Navbar/> 
      <User/>
      <About data= {slides}/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
  );
}

export default App