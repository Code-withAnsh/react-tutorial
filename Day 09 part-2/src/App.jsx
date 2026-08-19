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
      {/* step 2 -- this routes and route is ratta fication part */}
      {/* step 5 -- nav jo hai wo routing ka part na hai use routing ke bahar
      yhi per likhenge */}
      <Nav/>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        {/*step3 --  by default tumhara home page khula rhega aur 
         tum abhi check karna chahta ho toh local host : xxxxx ke aage / laga ke Product ya kuch
        aur likh ke jo mention hai check kar skte ho lekin hum aise ek ek karke kab tak karenge
        hum chahte hai nav se click karke check karna toh lets bananate hai ek Nav.jsx*/}
      </Routes>
    </div>
  );
}

export default App