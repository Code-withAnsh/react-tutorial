import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
<style>
   //step 1 - go and see notes  ab install ho gya toh app ko wrap kar do 
</style>
createRoot(document.getElementById('root')).render(
    <BrowserRouter><App /></BrowserRouter>

)
