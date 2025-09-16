import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputref = useRef();

  const handleAdd = () => {
    const text = inputref.current.value;
    const NewItem = { completed: false, text };
    setTodos([...todos, NewItem]);
    inputref.current.value = "";
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDelete = (index) => {
     const newTodos = [...todos];
     newTodos.splice(index, 1);
     setTodos(newTodos);

  }
  return (
    <div className="App">
      <h1>To Do-List</h1>

      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="todo-item-delete"> 
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDelete(index)} className="trash"> ❌</span>
              </div>
              
            );
          })}
        </ul>
        <input ref={inputref} type="text" placeholder="Add a new task" />
        <button onClick={handleAdd}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
