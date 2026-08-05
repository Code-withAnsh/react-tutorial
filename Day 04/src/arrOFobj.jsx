import { Fragment } from "react";
const ArrOFobj = () =>{
    const profiles = [
        {name:'ansh',age:21},
        {name:'shiv',age:22},
        {name:'aman',age:23}
    ];
   
        {/* {profiles[0].name} lekin ek ek karke aise kitna karenge use forEach or map lekin hum map kare
        nge kyunki map hume return bhi karta hai new changed value*/}
   const updatedProfiles = profiles.map((profile,index)=>{
    return(

        <li key={index}>
            <span>Name:{profile.name}</span>
            &nbsp; &nbsp;
            <small>age:{profile.age}</small>
        </li>

    )
    console.log(updatedProfiles);
    

   })
        {/* lekin ab socho ye data issi map ke andar hi use kar rhe
        bahar kahi use karna chahe toh> toh  hum usko ek variable me save karke
        return laga denge */}
return(
    <>
    <h1>Rendering JSON</h1>
    <ol>{updatedProfiles}</ol>
    </>
)
     
}
export default ArrOFobj