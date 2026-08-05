import React from 'react'
import { Fragement } from "react";
import ArrOFobj from './arrOFobj';
import InnerText2 from './innerText2';
import Counter from './Counter3';
//ha tum sahi jagah ho sabse phle yhi padho
const App = () => {
  let n = 12;//number
  let s = 'hello world'//string
  let b = true;//boolean
  let arr = [<div>hello</div>,12,'hello',undefined,true,null,'hii']
  let obj = {name:'ansh',age:21}
  return (
    <>
      {/* <div>App</div> */}
      <h1>Data_types</h1>
      <h2>number:{n}</h2>
      <h2>string:{s}</h2>
      <h2>boolean:{b}</h2>
      {/* ab agar jake dekhoge toh boolean,null,undefined hum directly 
      browser per nhi dikhega kyunki ye reserved keyword hai issi cheez ko bolte hai 
      primitives ab chalo array ki baat karte hai*/}
      <h2>array:{arr}</h2> 
      {/* ab tum jake dekho print hoga 12hellohii concat me lekin undefined
      ye sab na print hoga  aur dekhoge toh yaha react me array me humne
      ek html bhi pass karke print kara skte hai lekin object ke liye
      aisa na hoga seedha error dega*/}
      {/* <h2>object: {obj}</h2> ye error de dega kyumki obj render nahoga direct */}
{/* lekin hum direct key value alag alag dikha skte hai obj me */}
<h2>object: {obj.name} | {obj.age}</h2>
{/* lekin ab socho tum backend se api se db se jo data aata hai wo toh json se
aata hai jo ki array of obj me rhta hai usko kaise karoge ? whi abhi
padhengeaur json ko dikhane ko bolte hai rendering the list item */}
<ArrOFobj/>
<InnerText2/>
<Counter/>
    </>
  );
}

export default App