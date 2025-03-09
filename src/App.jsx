import React from 'react';
import Header from './assets/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/Home';
import Destination from './assets/Destination.jsx';
import Contact from './assets/Contact';
import Footer from './assets/Footer';
import './main.jsx'
import Book from './assets/Book.jsx';




function App() {
  return (
    <BrowserRouter>
     <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Book" element={<Book />} />
            
           </Routes>
           <Footer />
    </BrowserRouter>
  );
}

export default App;
