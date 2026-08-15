import {createContext} from "react";
import { useContext, useState } from "react";

// sabse pahle jao main me
export const todocontext = createContext(null); //step 2 -- context universal data hold karta hai 
//issi ke through pura data flow karayenge dekho ab baat ye hai jo disadvantage aa rhi thi
//porops drilling me whi yaha hum solve kar rhe aur ise hum export ksr rhe hai tabhi
//jaha jaurat hogi import kar skenge
const Wrapper = (props) => {
   const [Todos,setTodos] = useState([
    ]);
return (
  <div>
    <todocontext.Provider value = {[Todos,setTodos]}> {props.children}</todocontext.Provider>
    {/* step 5 - ab maine value se hello hata ke wo actual data
    daal diya jo travel karana hai todos settodos */}
    
    {/*step 3 -  todocontext ko wrap karna hai children ke andar
    jis se jo bhi hum isme add kare wo bydefault andar chala jaye
    toh todocontext me hum jo value provide kar rhe hai wo props.children me 
    pass ho jayegi  aue ye props.children hai kya main,jsx me dekho
    puri ki puri app humne pass ki h issi me sab hai  */}
  </div>
);
}

export default Wrapper;