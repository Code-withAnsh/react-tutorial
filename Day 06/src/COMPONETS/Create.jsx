import { useState } from "react"
import { nanoid } from "nanoid";
import { Fragment } from "react";
// ye props wala samjhne ke liye pahle jao app me jaaha create read
//call kiya gya hai baaki tum abhi logic samjhna chahao todo kaise bana

const Create = (props) => {
    const Todos = props.Todos// ye props se flow kara rhe hai
    const setTodos = props.setTodos
  const [title, settitle] = useState(""); //dekho title just input le rhe user type
  // buy milk toh pahle type hoga b then u then y aise jab pura ho jayega wo jayega settitle
  // me te title sirdf input le rha

  const submitHandler = (e) => {
    e.preventDefault();
   
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    //   const Copytodos = [...Todos]; // Todos array ki copy bana li, taaki usi copy me naya todo add kar sake
    //   Copytodos.push(newTodo); //jo naya todo aya usko isme push kar diya aur
      //dekho hold kon kar rha sabko setTodos ussi me daal denge copy todo ko
    //   setTodos(Copytodos);
    //ab upar ki teen line ko ek line me karyte hai
     if(title.trim() === ''){
        alert('sale task likh le dalle!')
        return;
    }
    setTodos([...Todos, newTodo]);
    settitle("");
  };
//internal css kaise lagate hai
  const buttonCss = {
    color: "black",
    padding: "5px 10px",
    backgroundColor : 'Transparent',
    border:'1px solid black',
    borderRadius : '5px'
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Enter task"
        />
        <br />
        <br />
        <button style={buttonCss} >Create Todo</button>
      </form>
    </>
  );
}

export default Create