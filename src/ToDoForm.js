import React, { useState } from "react";

export default function ToDoForm({ addTodo }) {
  const [text, setText] = useState("");

  //handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text); 
    setText("");
  };

  return (
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
