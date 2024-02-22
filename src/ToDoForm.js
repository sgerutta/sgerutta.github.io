import React, { useState } from "react";

//primary goal: to understand user input in React

export default function ToDoForm({ addTodo }) {
  //initialize variables
  const [text, setText] = useState("");

  //pays attention to the event, typing
  const handleTextChange = (e) => {
    //e.target.value will grab the latest thing that was typed
    //setText remembers whatever is typed into the box
    setText(e.target.value);
  };

  //handle form submission 
  const handleSubmit = (e) => {
    //stops the wepage from doing the typical, and allows it to update
    e.preventDefault();
    //screens to see if the text was empty or white space
    if (text.trim() === "") return;
    //calls the addTodo function, to create the task
    addTodo(text); 
    //clears the box, so user can write a new message
    setText("");
  };

  //defines the React component
  return (
    //onSubmit event listener to add a task
    //onChange event listener for change in text
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Enter a new task"
        onChange={handleTextChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
