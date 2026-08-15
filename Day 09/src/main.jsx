import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { ToastContainer } from "react-toastify";
import Wrapper from "./Wrapper.jsx";
createRoot(document.getElementById("root")).render(
  <Wrapper>
    {/* step 1 */}
    {/* dekho wrapper ke andar jo pass karenge wo children me return karega aur wrapper.jsx me jake 
childre.props kar dena hai bus jo kuch hai is wrapper tag ke andar sab mil jayega */}
    <App />
    <ToastContainer position="Top center"></ToastContainer>
  </Wrapper>,
);
{/* toh humne app pass kiya toast bhi ab ye gya kaha children me use kaise karenge props.children see wrapper.jsx */}
