import React, { useState } from "react";
const Twowaybinding2 = () => {
    //pahle niche ka padho
    //phir ye padho step 2
//   const changeHandler = (e) => {
//     console.log(e.target.value); //event ke andar target hai uske andar value
//     //ab jaise hi input per naam type hoga console me dikh jayega
//     //lekin hum console me na browser per chahte hai toh hum banate hai useState
//     setfullName(e.target.value); // ab jo bhi aa rha wo setfullname me kar do
//     //uska use state niche bana hi diya hu ab isko return me render kara do
//     //lekin kaha value me
//   }; //ab humne pure changehandler ko comment kiya aur usko utha ke hum onchange me daal denge
//yaad hai aisa kuch kar chuke hai pahle bhi
  const [fullName, setfullName] = useState(" ");
  const [age,setage]  = useState('');
  const [users,setUsers] = useState([])//usestate me blank array isliye banaya jiss se aage chalke
  //isi me sara data add ho kisme hoga setUsers me aur save hoga users me setUsers me new data 
 const submitHandler = (e)=>{
    e.preventDefault()
    const newUser = {fullName,age}//yhi data api backend db sab jagah bhejenge
    //ab ye aaage ka 10-12 line final step ka part hai see notes also
    setUsers([...users,newUser]) //...users me saare purane data aayenge kyunki yhi toh display kar rha setUser me hum add kar rhe
    setfullName('');//ye 2 line isliye jiss se subit ke bad input blank ho jaye
    setage('')
 }
 const showUserData = users.map((user,index)=>{// ye hai final step iske liye notes dekho
    return(
        <li key={index}>
            <h3>Name:{user.fullName}</h3>
            <p>Age:{user.age}</p>
        </li>
    )

    
 })
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        {/* step 4 hai ye form me onsubmit ye onsubmit ek event hai dekho pahle
        kta ho rha tha button click hote hi page reload ye toh hum chahte na hai
        isliye onsubmit lagaye aur usme ek pass kiye koi bhi lets submitHandler aur upar
        dekho const ke saath submit handler kya karega oonsubmit refresh hone se 
        na rokta wo toh preventdefault hi karta hai onsubmit se hum submit per kya ho wi karenghe
        toh pahle toh refresh na ho whi kiye preventdefault se*/}
        <input
          //   onChange={changeHandler}
          onChange={(e) => setfullName(e.target.value)} // step 3 aur yha per daal diya iss se
          //complexity thoda kam hua
          value={fullName}
          type="text"
          placeholder="Full name"
        />
        <input
          onChange={(e) => setage(e.target.value)}
          
          value={age}
          type="number"
          placeholder="Enter age"
        />
        <button>Submit</button>
        {/* pahle ye padho */}
        {/* step 1 simple hum chahte hai inpput me name age daale 
            aur browser per wo display ho jaye not on console on browser
            problem 1 . submit pr click karte hi reload ho ja rha siko abhi 
            dekhte hai pahle ye dekho input me jo tum type karoge wo input ka
            default nature hai ki usme type kar skte ho lekin react ko na pta usme kuch
            likha hua hain toh yaha aata hai two way binding

            two way binding -- only apply on form elements toh form me jo bhi likho wo pahle
            wo react me save ho aur whi data dobara tumhare input feild per dikhega
            tumhe pta na chalega that is two way 1st way tumne input me jo dala wo
            react per gya aur whi react dobara input me dala ab react me save kaise hoga
            by 'onchange' (it is a event )ye hai first way save on react ab react se lana hai input per
            use value */}
      </form>
<hr/>
<ol>{showUserData}</ol>
    </div>
  );

};

export default Twowaybinding2;
