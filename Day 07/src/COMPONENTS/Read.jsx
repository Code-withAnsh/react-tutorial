import { useState } from "react";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import './Read.css'//
//dekho logic toh pichle me seekh liya day 06 me yaha hum kar rhe hai props drilling aur styling theek hai
//ab samjho dhyaan se samjho maine css import kiya sirf issi component me lekin agar mai h1 per koi
//style lagata hu toh mere jitne bhi component me h1 hoga sab per lagg jayega aur ye bhut bada dikkat hai
//toh ek solution hai class bana lete hai
const Read = (props) => {
  const Todos = props.Todos;
  const setTodos = props.setTodos;
  const deletestyle = {
    padding: "1px",
    marginLeft: '1reman'
  };
const deleteHandler = (id) =>{
  //step 2 -- step 1 se jo id aayi wo yhi id me save hua
  const filteredTodo = Todos.filter((khudkiId)=> khudkiId.id!=id)
  //ab filter her ek todo per chalega dekhega ki uskikhud ki id jo hia
  //wo kahi aayi hui id ke barabar toh nhi jaha tak true rhega waha tak rkhega
  ///jo false hoga use delete kar dega
  setTodos(filteredTodo)
}

  const renderTodos = Todos.map((todo) => {
    return (
      <li
        // style={{ color: todo.isCompleted ? "green" : "tomato" }}
        key={todo.id}
        className="flex mb-3 justify-between item-center p-3 bg-gray-900 rounded wrap-anywhere"
      >
        <span className="text-xl font-thin">{todo.title}</span>
        <button
          className="p-1 text-red-400 text-sm border rounded text-2xl ml-5 font-thin "
          onClick={() => deleteHandler(todo.id)}
        >
          Delete
        </button>


        {/* //step 1 -- humne kisi task ke aage wale delete btn per click kiya fatak se 
        //deleteHandler call hua with uss todo ki id i.e. todo.id */}
      </li>
    );
  });

  return (
    <div className="w-[40%] text-4xl">
      <h1 className="mb-10 text-5xl font-thin">
        <span className="text-pink-500">Pending </span> Todos:
      </h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
