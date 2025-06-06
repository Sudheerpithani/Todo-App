import React,{useState} from 'react'
import Form from './Components/Form';
import Todolist from './Components/Tolist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <div className='header'>
        <h1>Todolist-App</h1>
        <div><Form todos={todos} setTodos={setTodos}/></div>
        <div><Todolist todos={todos} setTodos={setTodos}/></div>
        <ToastContainer position="top-right" autoClose={3000}  />
      </div>
    </div>
  );
}

export default App;