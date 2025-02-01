import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css"
import Home from './components/Home';
import Recipe from './components/Recipe';
import Countryspl from './components/Countryspl';
import ContextProvider from './components/ContextProvider';
import Dishes from './components/Dishes';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/Contact';

import './filter.css'
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/country' element={<Countryspl/>}/>
          <Route path='/dishes' element={<Dishes/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
