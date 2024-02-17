// App.js File
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import './AppStyle.css'
import localImage from './IMG_0980.jpg';
import people from './IMG_4965.jpg';
import food from './IMG_4835.jpg';
import ImageSlider from './ImageSlider';


export default function App() {
  //initialize variables
  const [todos, setTodos] = useState([]);
  const slides = [
    {url: "http://localhost:3000/IMG_0980.jpg", title: "nature"},
    {url: "http://localhost:3000/IMG_4835.jpg", title: "food"},
    {url: "http://localhost:3000/IMG_4965.jpg", title: "family"},
  ];
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

  //toggle the todos
  function toggleToDoHelper(id){
    let tempTodos = [];
    //loop through the ids, and change the given id's completed status
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === id){
        if(todos[i] === true){
          todos[i].completed = false;
        }else{
          todos[i].completed = true;
        }
      }
      tempTodos.push(todos[i])
    }

    return tempTodos;
  }

  //toggle to-do
  function toggleToDo(id) {
    setTodos(toggleToDoHelper(id));
  }

  //delete function helper
  function deleteMultipleHelper(todos){
    let tempTodos = [];
    for(let i = 0; i < todos.length; i++){
      if(todos[i].completed == true){
        continue;
      } else{
        tempTodos.push(todos[i])
      }
    }

    return tempTodos;
  }

  //delete multiple todos
  function deleteMultipleTodos(todos){
    setTodos(deleteMultipleHelper);
  }

  function deleteOneTodoHelper(id){
    let tempTodos = [];
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id !== id){
        tempTodos.push(todos[i])
      }
    }
    return tempTodos;

  }
  //delete to-do
  function deleteToDo(id) {
    setTodos(deleteOneTodoHelper(id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} deleteToDo={deleteToDo} deleteMultipleTodos={deleteMultipleTodos} toggleTodo={toggleToDo}/>
      {/* <img className = "pictures" src={people} alt = "Nature Image" /> */}
      <ImageSlider className = "slides" slides={slides} />
    </div>
  );
}
