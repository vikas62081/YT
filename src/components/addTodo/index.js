import React, { useState } from 'react'
import {emitter} from '../notification'
const AddTodo = ({ addTodo }) => {
    const addTodoStyle = {
        position: "fixed",
        bottom: 10,
        display: "block",
        width: "100%"
    }
    const [title, setTitle] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Math.random(), title: title, done: false }
        addTodo(newTodo)
        emitter.emit("NOTIFICATION","New todo added successfully")
        setTitle("")
    }
    return (<div style={addTodoStyle}>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Something here"
                style={{ width: "90%", padding: 10 }}
                required />
            <input type="submit" style={{ width: 80, padding: 10 }} />
        </form>
    </div>)
}

export default AddTodo;