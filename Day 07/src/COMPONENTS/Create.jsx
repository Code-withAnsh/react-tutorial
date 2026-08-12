import { useState } from "react";
import { nanoid } from "nanoid";
import { Fragment } from "react";
const Create = (props) => {
  const Todos = props.Todos;
  const setTodos = props.setTodos;
  const [title, settitle] = useState(""); 
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    if (title.trim() === "") {
      alert("sale task likh le dalle!");
      return;
    }
    setTodos([...Todos, newTodo]);
    settitle("");
  };
  // const buttonCss = {
  //   color: "black",
  //   padding: "5px 10px",
  //   backgroundColor: "Transparent",
  //   border: "1px solid black",
  //   borderRadius: "5px",
  // };

  return (
    <div className="w-[60%] p-10 text-center ">
      <h1 className="text-5xl font-thin">
        Set <span className="text-red-400">Reminders</span> for task
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-b w-full text-2xl font-thin p-4 outline-0"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Enter task"
        />
        <br />
        <br />
        <button className=" mt-5 text-xl px-10 py-2 border rounded">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
