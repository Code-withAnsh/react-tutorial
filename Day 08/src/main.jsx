import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { ToastContainer } from "react-toastify";
import Wrapper from "./Wrapper.jsx";
createRoot(document.getElementById("root")).render(
<>
<Wrapper App = {<App/>}/>
{/* definition ke hissab se wrapper ek componet jo apne props me ek compomnent le rhe i.e. app ab jao wrapper.jsx me wo return
bhi kar rha ek component */}
<ToastContainer position="top-center"></ToastContainer>
</>
);
