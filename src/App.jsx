import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './Component/Footer';
import Men from './Pages/Men';
import Women from './Pages/Women';

export default function App (){
  return (
    <>
 
     <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path='/women' element={<Women/>}/>
      </Routes>
      <Footer/>
    </Router>
    
   
    </>
  )
}


// export default App();
