
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>

      <Navbar title="TextUtils" aboutText="aboutText" />

      <div className="container my-3">



        <TextForm heading="Enter the text to analyze below" />


      </div>


    </>
  );
}

export default App;
