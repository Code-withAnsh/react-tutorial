import React from 'react'
import {Fragement} from 'react'
import EventList3 from "./EventList3.jsx";


export const App = () => {
  return (
    <>
      <div>hello</div>
      <div>world</div>
      <EventList3/>
    </>
  );
}


export default App;

//a fn component will always return a html see the return <div>App<div>
//we cannot write anything after return
// we can only return single data/entity/variable/value
//there must be single return in a fn and that must be in the last statetement
//dekho hum return me ek aur div as a parent nhi return kar skte means--
// return( <div>App</div>
//   <div>hello</div>    ye possible ne hai but inn dono ko ek parent ke andar karke isko as a child kar skte hai
//   return(
//  <div><div>hello</div>
// <div>bro</div> </div>))
//but iss se browser per extra div ban jata hai so to avoid -- <Fragement> tag</Fragement> alternate way < > </> but ha upar import kar lena
//inport {Fragement} from 'react'
