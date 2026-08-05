
import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1)
    }
const decrement = () =>{
    if(count === 0){
        alert('0 se niche nhi ja skte!')
    }else{
    setCount(count-1)
    }
 
}
   const incrementTwice = () => {
     setCount(count + 1);
     setCount(count + 1);
   };
   
       const handleChange = (e) => {
         console.log('typed:', e.target.value);
       };
     
//    lekin hum dekho hum soche ek fn banate hai jo twice me inc kare laekin aisa na hoga kyu kyunki dono line me count apne prev
//value se hhi shuru hoga let suppose prev value was 0 toh 1st aur 2nd line dono me 0 hi ayega jo increase hoke 1 hoga na ki pahle
//me 1 aaye dusre me 1+1 = 2
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}> -1</button>
        <button onClick={incrementTwice}>+2 (test)</button>
        <input onChange={handleChange} />
      </div>
    );
  
}


export default Counter