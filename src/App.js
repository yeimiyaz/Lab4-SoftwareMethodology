
import logo from './logo.svg';
import './App.css';
import Student from './Student.js';
import University from './University.js';
import Menu from "./components/Menu";
import React from "react";
import Hello from  "./components/hello";

function App() {
  return (
    <React.Fragment>
          <Menu></Menu>
          <University/>
          <Student name="Rick Rude" number="1111" enrolled="2"/>
          <Hello name="Priya"/>
      </React.Fragment>
  );
}


export default App;
