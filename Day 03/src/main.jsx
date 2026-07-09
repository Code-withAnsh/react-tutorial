
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"; 
createRoot(document.getElementById('root')).render(<App/>)
//html se root ko uthao uske andar App daal do  App ek fn hai toh use call kar liya aur ha react me () aise nhi closing tag ke saath call karte hai
//dekho <App/> ye call kiya gya hai aiese- <App></App> bhi call kar skte hai

//flow jo mai samjh paa rha index jo hai wo screen per chize ko
//  dikhata hai aur uss se attach hai main aur main hi index tak 
// chezo ko pahuchata hai example -- hum render kar rha hai app
//  ko aur ye render hoga index per jo display karega screen per 
// ab jo apna app hai whi render kar rha toh jitne bhi files
//  banenge unko call kiya jayega app me hi aur import bhi mainly
//  likha jata hai specific files me jaise app, eventlist3,footer wo call hota hai app me jisko main render karata hai main,jsx

//thoda aur precise karte hain: import hamesha usi file mein likha jata hai jahan component ko use karna hai. 