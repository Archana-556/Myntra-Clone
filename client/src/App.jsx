import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './Component/Footer';
import CategoryPage from './Pages/CategoryPage';
import ProductListPage from './Pages/ProductListPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import Login from './Pages/Login';
// import Men from './Pages/Men';
// import Women from './Pages/Women';

export default function App (){
  return (
    <>
 
     <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        {/* <Route path="/men" element={<Men/>} /> */}
        {/* <Route path='/women' element={<Women/>}/> */}
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:type" element={<ProductListPage />} />
        <Route path="/:category/:type/:productId" element={<ProductDetailsPage />} />
      </Routes>
      <Footer/>
    </Router>
    
   
    </>
  )
}


// export default App();
