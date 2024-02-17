import './ToDoListStyle.css'

export default function taskList({
  todos,
  deleteToDo,
  deleteMultipleTodos,
  toggleTodo,
}) {
  return (
    <div className="pageContainer">
      <div className="wrapper">
        <ul>
          <div className="toDoList">
            {todos.length > 0 &&
              todos.map((todo) => (
                <div className="singleToDo" key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  {todo.text}
                  {/* <button onClick={() => toggleToDo(todo.id)}> Completed </button> */}
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
