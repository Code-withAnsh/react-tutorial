import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HOME from './Components/HOME.jsx'
import About from './Components/About.jsx'
import Product from './Components/Product.jsx'
import Service from './Components/Service.jsx'
import Nav from './Components/Nav.jsx'
//full page per css nhi laaga
const App = () => {
  return (
    <div className="w-screen h-screen text-white bg-gray-800 p-4">
    
      <Nav/>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App