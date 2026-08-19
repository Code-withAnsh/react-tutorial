import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-15 justify-center p-10 '>
      {/* step 4 ---  ancher tag nhi use karenge nhi toh refresh hoga react ka diya hu Link to use karte haui*/}
      <Link to="/">Home</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Service">Services</Link>
      <Link to="/about">About</Link>
      {/* step 6 -- ab nav per click karke alag alag page per ja rhe hai
      aur single page me aur dekhoge tum toh url me sirf path change ho rha */}
    </div>
  );
}

export default Nav
// final conclusion to use rout
//   sabse pahle baat tumko main me
//import karna hoga route by npm i react-router-dom uske baad tumhe ek wraper banao
//uske andar app ko daal do
// ab alag alag component bana lo jitne page chahiye aapko
//aur app me aake import Route and Routes and Routes and Route tag ke andar
//with path tum daal do sab aur ab jaha se tumhe acess karana hai let suppose 
//nav aaake ye sab kar do jo upar kiya hai