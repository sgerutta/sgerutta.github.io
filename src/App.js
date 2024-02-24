// App.js File
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import './AppStyle.css'
import ImageSlider from './ImageSlider';
import nature from './image_1.jpg';
import food from './image_2.jpg';
import people from './image_3.jpg';

//primary goal: to be able to have a running website on github
//secondary goal: to be able to organize the code in multiple documents.
//this document is for the essential functions

export default function App() {
  //initialize variables
  const [todos, setTodos] = useState([]);
  //reset todos
  const slides = [
    { url: nature, title: 'Nature Image' },
    { url: food, title: 'Food Image' },
    { url: people, title: 'People Image' },
  ];


  //add to-do, props is text, and creates an object that has an unique id, text, and completed feature
  //adds the todo to todos
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

  //toggle the todos, takes in the id, and will the given objects' completed feature
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

  //toggle to-do, takes in an id, and updates the todos
  function toggleToDo(id) {
    setTodos(toggleToDoHelper(id));
  }

  //delete function helper
  //takes in the todos, and returns only the objects that are not completed
  function deleteMultipleHelper(todos) {
    return todos.filter(todo => !todo.completed);
  }

  //delete multiple todos, takes in todos, and updates the todos
  function deleteMultipleTodos(todos){
    setTodos(deleteMultipleHelper);
  }

  //to delete one todo, from the button. takes in an id
  //returns all the other todos
  function deleteOneTodoHelper(id) {
    return todos.filter(todo => todo.id !== id);
  }

  //delete to-do, takes in id, and updates the todos
  function deleteToDo(id) {
    setTodos(deleteOneTodoHelper(id));
  }


  //what this document overall returns, the set up of the webpage
  //calling in the Form, List, and ImageSlider
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