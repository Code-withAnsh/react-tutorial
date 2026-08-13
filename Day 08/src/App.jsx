import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import Create from "./COMPONENTS/Create";
import Read from "./COMPONENTS/Read";

const App = () => {
  const [Todos, setTodos] = useState([
  ]);
  return (
    <div className="flex w-screen h-screen bg-gray-800 p-10 text-white">
      <Create Todos={Todos} setTodos={setTodos} />

      <Read Todos={Todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
