import { useState } from "react";

export default function ToDoForm({ addToDo }) {
  const [text, setText] = useState("");

  //handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addToDo(text);
    setText("");
  };

  return (
    <div className="wrapper">
      <ToDoForm addTodo={addTodo} />
      <div className="toDoList">
        {/* Existing to-do list mapping */}
      </div>
    </div>
  );
}
