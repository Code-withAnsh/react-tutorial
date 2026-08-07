import { useState } from "react";
import { Fragment } from "react";
const Read = (props) => {
     const Todos = props.Todos;
     const setTodos = props.setTodos;

    const renderTodos = Todos.map((todo) => {
      return <li 
      style={{color: todo.isCompleted ? 'green' : 'tomato'}}
      key={todo.id}>{todo.title}</li>;
    });

  return (
    <>
        {/* ye sab read karne wale element hai islu=iye
        ye read wale file me hai */}
      <h3 style={{color:"tomato"}}>Pending Todos:</h3>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
