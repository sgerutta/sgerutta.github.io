// App.js File
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import './AppStyle.css'
import ImageSlider from './ImageSlider';
import localImage from './image_1.jpg';
import food from './image_2.jpg';
import people from './image_3.jpg';

//main goal: to be able to have a running website on github

export default function App() {
  //initialize variables
  const [todos, setTodos] = useState([]);
  const slides = [
    { url: localImage, title: 'First Image' },
    { url: food, title: 'Second Image' },
    { url: people, title: 'Third Image' },
  ];


  //add to-do, props is text, and creates an object that has an unique id, text, and completed feature
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
      if(todos[i].completed === true){
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


  //can add tasks
  return (
    <div className="App">
      <h1>Task List</h1>
      <ToDoForm addTodo={addTodo} /> 
      <ToDoList todos={todos} deleteToDo={deleteToDo} deleteMultipleTodos={deleteMultipleTodos} toggleTodo={toggleToDo}/> 
      <div className="containerStyles"> 
        <ImageSlider slides={slides} />
      </div>

    </div>
  );
}