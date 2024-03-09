export default function Todo({todo, index, removeTodo}) {
  return (
   <div className="task">
    <span>{index + 1}.</span>
    <h4>{todo.task}</h4>
    <button onClick={() => removeTodo(todo)}>X</button>
   </div>
  )
}
