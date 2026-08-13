import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const Todos = props.Todos;
  const setTodos = props.setTodos;
  //step 1
  const {
    register,
    handleSubmit,
    reset, //to reset form
    formState: { errors }, //to find errros
  } = useForm();
  //ye useform wala ratt lo ye aise hi karna hai jab bhi form handler lagana hoga

  const submitHandler = (data) => {
    //ab yaha e nhi data milega
    ((data.isCompleted = false), (data.id = nanoid()));
    const copytodos = [...Todos];
    copytodos.push(data);
    setTodos(copytodos);

    toast.success("Todo created"); //step -4 ye alag fanda hai notification ke liye pop-up notification
    // pahle main.jsx dekh lo aur ha bhai notes bhi dekhte rhna
    reset();
  };

  return (
    <div className="w-[60%] p-10 text-center ">
      <h1 className="text-5xl font-thin">
        Set <span className="text-red-400">Reminders</span> for task
      </h1>
      {/* step 3 pahle kya tha submithandler fn bana ke logic likhte the ab kuch na wo jo handleSubmit mila hai step 1 me
      whi use kar lenge */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          //step 2
          {...register("title", {
            required: "title should not emplty",
          })} //register ke andar bhut sare data hoga maine use spread karke dher sare attributes bana liye
          //aur title humne naam diya tha isliye wo likha1
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
