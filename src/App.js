// App.js File
import React, { useState } from "react";
//import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function App() {
  //initialize variables
  const [todos, setTodos] = useState([]);

  //add to-do
  function addTodo(text) {
    if (text !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }

  //toggle to-do
  function toggleToDo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  //delete to-do
  function deleteToDo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="wrapper">
      <div className="toDoList">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div className="singleToDo" key={todo.id}>
              {todo.text}
              <button onClick={() => toggleToDo(todo.id)}> Completed </button>
              <button onClick={() => deleteToDo(todo.id)}> Delete </button>
            </div>
          ))}
      </div>
    </div>
  );
}
