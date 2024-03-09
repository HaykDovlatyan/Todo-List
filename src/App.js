
import { useState } from 'react';
import './App.css';
import Todoform from './Todoform';
import Todo from './Todo';

function App() {
  const [todos,setTodos] = useState([]);


const addTodo = x => {
  if(x) {
    setTodos([...todos, {
      id : Math.random(),
      task : x
    }])
  }
}

const removeTodo = x => {
  setTodos([...todos.filter(item => item.id !== x.id)])
}

  return (
    <div className="App">
      <h2>Tasks count is <span>{todos.length}</span></h2>
        <Todoform  addTodo={addTodo}  />
        {todos.map((todo,index) => {
          return <Todo todo={todo} index={index} removeTodo={removeTodo}/>
        })}
    </div>
  );
}

export default App;
