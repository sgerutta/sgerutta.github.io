export default function taskList({todos, deleteToDo, deleteMultipleTodos }) {
    return(
  <div className="wrapper">
    <ul>
      <div className="toDoList">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div className="singleToDo" key={todo.id}>
              {todo.text}
              {/* <button onClick={() => toggleToDo(todo.id)}> Completed </button> */}
              <button onClick={() => deleteToDo(todo.id)}> Delete </button>
            </div>
          ))}
          <button onClick={() => deleteMultipleTodos(todos)}>Delete All Completed </button>
      </div>
    </ul>
  </div>
    );
}
