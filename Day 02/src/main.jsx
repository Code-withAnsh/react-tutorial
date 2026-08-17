
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { x,y } from "./App.jsx";
console.log(x,y);//console karke dekh lete hai

createRoot(document.getElementById('root')).render(
    <App />
    //jo import hua tha uska naam
  
)

//pahle jao App.jsx ka comment padh ke aawo
//aa gye?? ab chlo flow samjhte hai jao index.html per wha script ke pass
// aa gye index se ab suno upar dekho createRoot hai usss se html ka humne root id pakad ke usper render kara diya app ko aur ab jao app me wha humne
//pura karyakarm kiya 
