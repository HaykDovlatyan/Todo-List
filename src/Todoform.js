import { useState } from "react"

export default function Todoform({ addTodo }) {
    const[ user, setUser ] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addTodo(user);
            setUser('')
        }}>
            <input type="text" placeholder="Enter your task" value=   {user} onChange={(e) => {
           setUser(e.target.value)
            }}/>
            <button>ADD TASK</button>
              
        </form>
    )
}