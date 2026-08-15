import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { todocontext } from "../Wrapper";

const Create = () => {
  // const Todos = props.Todos;
  // const setTodos = props.setTodos;
const [Todos,setTodos] = useContext(todocontext) 
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors }, 
  } = useForm();


  const submitHandler = (data) => {

    ((data.isCompleted = false), (data.id = nanoid()));
    const copytodos = [...Todos];
    copytodos.push(data);
    setTodos(copytodos);

    toast.success("Todo created");
    reset();
  };

  return (
    <div className="w-[60%] p-10 text-center ">
      <h1 className="text-5xl font-thin">
        Set <span className="text-red-400">Reminders</span> for task
      </h1>
     
      <form onSubmit={handleSubmit(submitHandler)}>
        <input

          {...register("title", {
            required: "title should not emplty",
          })} 
          className="border-b w-full text-2xl font-thin p-4 outline-0"
          placeholder="Enter task"
        />
        <small className="font-thin text-4xl text-red-600 ">
          {errors?.title?.message}
        </small>
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
