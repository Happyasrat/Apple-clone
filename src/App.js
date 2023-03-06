// import {BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Switch} from "react";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./commonResource/css/styles.css";
// import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from ".././src/components/Main/Main";
import Mac from ".././src/components/Main/Nav/Mac"
import Iphone from ".././src/components/Main/Nav/Iphone";
import Ipad from ".././src/components/Main/Nav/Ipad";
import Four04 from "./components/Main/Nav/Four04";
import LearnMore from "./components/Main/Nav/LearnMore";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
         
          <Route path="/" element={<Main />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="*" element={<Four04/>} />
          
        </Routes>
        <Footer />
      </>
    // </Router>
  );
}

export default App;
