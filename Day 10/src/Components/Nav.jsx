import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-15 justify-center p-10 '>

      <Link to="/">Home</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Service">Services</Link>
      <Link to="/about">About</Link>
  
    </div>
  );
}

export default Nav
