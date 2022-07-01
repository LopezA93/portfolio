import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/Navbar/Navbar';
import Presentacion from './components/Presentacion/Presentacion';
import TrabajosContainer from './components/CardsContainer/CardsContainer';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home />} />
    
    {/* <Route path='/proyectos' element={<TrabajosContainer/>} /> 
    <Route path="/contacto" element={<Contacto />} /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


