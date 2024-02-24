import './ToDoListStyle.css'

//primary goal: to define the task list, the part after user input

//takes in todos, the function to delete, and toggle tasks
export default function taskList({
  todos,
  deleteToDo,
  deleteMultipleTodos,
  toggleTodo,
}) 
//creates the classnames so that CSS can be applied
//creates an under orded list of the tasks, using map to loop through 
//the checkbox is created, with the listening event onChange
//the buttons are created to delete tasks, and use onClick listeners
  {
  return (
    <div className="pageContainer">
      <div className="wrapper">
        <ul>
          <div className="toDoList">
            {todos &&
              todos.map((todo) => (
                <div className="singleToDo" key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  {todo.text}
                  <button className="btn singleDelete" onClick={() => deleteToDo(todo.id)}> Delete </button>
                </div>
              ))}
            <button className = "btn multipleDelete" onClick={() => deleteMultipleTodos(todos)}>
              Delete All Completed{" "}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
