// use state hooks
import React, { useState } from 'react'
import {Fragment} from 'react'
const InnerText2 = () => {
    // let username = 'Ansh' humne isko comment kar diya aur usestate use kiya niche padho
    //pahle kyu tab samjh ayega
    const [username,setUsername] = useState('Ansh')//aur aise hum set karenge
    //setUsername kyu kyunki value change karna hai aage chalke ,username read only hai
    //setUsername ek fn hai

    const changeHandler = () =>{
        setUsername('shivmani'); //username = shivmani isliye nhi kiya
        //kyunki username ek read only hai  
    };
        console.log(username);
  return (
    <div>
        <h1>username</h1>
        <h3>{username}</h3>
        <button onClick={changeHandler}>change Name</button>
        {/* lekin yaar click karne per naam toh na change hua toh ye kaam kaise karenge?
         react ko btao kya change karna hai wo compare karega virtual dom se
         wo usko reflect kar dega browser per simply chuki let username humare dwara
         banaya gya hai islye react ko pta nhi username hai kuch toh react ko btao
         toh mujhe wo naam use karna hai jo react dwara diya jaye aur ussi diye gye naam
         ko bolenge useState hooks*/}
    </div>
  );
};

export default InnerText2;