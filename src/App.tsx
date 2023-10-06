// import axios from 'axios';
// import { useState } from 'react';
// import About from './pages/About/index'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Home from './pages/Home';
import Quotes from './pages/Quotes/index';
import 'tailwindcss/tailwind.css';


function App() {

  
  return (
    <div>
      <Layout>
      
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='about' element={<About /> } />
          <Route path='quotes' element={<Quotes />} />
        </Routes>
      </Layout>
    </div>
  )    
}

export default App
