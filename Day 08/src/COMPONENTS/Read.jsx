import { useState } from "react";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import './Read.css'//
import { toast } from "react-toastify";

const Read = (props) => {
  const Todos = props.Todos;
  const setTodos = props.setTodos;
  const deletestyle = {
    padding: "1px",
    marginLeft: '1reman'
  };
const deleteHandler = (id) =>{
  const filteredTodo = Todos.filter((khudkiId)=> khudkiId.id!=id)
  setTodos(filteredTodo)
  toast.error('Todo deleted!')
}
const completeHandler = (id) =>{
  const updatTodos= Todos.map((todo)=>
  todo.id === id ?{...todo,isCompleted:!todo.isCompleted}:todo);

  setTodos(updatTodos)
  toast.success('Todo updated!')
}

  const renderTodos = Todos.map((todo) => {
    return (
      <li
        style={{ color: todo.isCompleted ? "lightgreen" : "tomato" }}
        key={todo.id}
        className="flex mb-3 justify-between item-center p-3 bg-gray-900 rounded wrap-anywhere"
      >
        <span className="text-xl font-thin">{todo.title}</span>
        <div className="flex justif-between gap-5">
          <button
            className="pl-3 pr-3 text-red-400 text-sm border rounded text-2xl font-thin "
            onClick={() => deleteHandler(todo.id)}
          >
            Delete
          </button>
          <button className="text-2xl border p-1 rounded text-green-500"
          onClick={()=>completeHandler(todo.id)}>
            Completed
          </button>
        </div>

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
