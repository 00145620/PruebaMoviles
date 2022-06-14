import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import Header from './Components/Header';
import './App.css';


const App = () =>{

  const [input, setinput] = useState("");
  const [todos, setTodos] = useState([]);
  
  return(

    <div className="container">
      <div className="wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setinput={setinput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>

  );
}

export default App;
