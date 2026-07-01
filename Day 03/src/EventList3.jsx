import {Fragement } from "react";
const Eventlist3 = () => {
  const handleclick = ()=>{//humne ek fn banaya jo kya karega alert karega jab
    ///bhi ise call karenge
    alert('button clicked')
  }
  const handleparamclick = (msg)=>{
    alert(msg)
  }
  // const wrapperhandler = ()=> handleparamclick('raat andheri hai , bhuj gye diye')
  
  return (
    < >
    <button id='btn' onClick={handleclick}>Click</button>
    <h1>{2+3}</h1>
    {/* //pahle hum log addeventlistner likhte the ab wo maine
    //on click kiya click hone per humara ek fn call ho gya
    // jo kya karta tha alert chalata tha 
    // acha handleclick ke saath () nhi lagana hai kyunki mujhe button click
    // krte time chalana hai aur () laga dene per react turant render kar
    // dega react {} ke andar jo kuch bhi hai kar dega bina kuch samjhe*/}

 
    {/* //abhi tk humne dekha ki hum {} ke andar fn () aise call na krte hai
    // nhi wo turnat chal jata hai but what if agar fn me koi para pass karna ho
    // tb toh call karte time () ye llagana hoga aur usme wo msg/argument pass
    // karni hogi toh ab hum ek fn bna lete hai let suppose wrapperhandler jisme 
    koi para na ho 
    // aur usme hum apna handlerparaclick fn jisme para pass hua hai usko call kar
    // lete hai wrapperhandler ke andar with argument instead of Fragment
    // aur ab uska event listner (button click hone per ) jo bhi ho wo karte hai
    // yaha button me aur usme jaha fn pass karna hai usme hum pass karenge 
    // wrapperhandler ko thats it but ab socho aur abhi mera kaam ho gya thoda
    // aur clean krte hai code wrapperhandler toh bus ek anonymous fn hai jisme hm
    // apna para wala fn pass kar rha hai kyu na uss para wale fn ko btn me pass
    // kr de isliye wo wrapperhandler wla code commentout kar diya */}
    <button onClick = { ()=> handleparamclick('raat andheri hai , bhuj gye diye')}>Click(param)</button>
    
    </>
  )
}

export default Eventlist3
