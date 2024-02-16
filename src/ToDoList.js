export default function taskList({todos, toggleToDo, deleteToDo }) {
    return(
  <div className="wrapper">
    <ul>
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
    </ul>
  </div>
    );
}
