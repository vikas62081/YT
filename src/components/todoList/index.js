import React from 'react'
import {emitter} from '../notification'
const Todo=({todo,removeTodo,handleChange})=>{
    const hanldeCheckboxChange=()=>{
        if(todo.done)
            return null;
        handleChange(todo.id)
        emitter.emit("NOTIFICATION",`"${todo.title}" task is completed successfully`)
    }
    return (<div>
        <input type="checkbox"
         style={{margin:"0 10px"}}
          checked={todo.done}
          onChange={()=>hanldeCheckboxChange()}/>
        <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
        <span style={{position:"fixed",
        right:20,
        padding:"0 10px",
        cursor:"pointer",
        fontWeight:600}}
        onClick={()=>{removeTodo(todo.id)
            emitter.emit("NOTIFICATION",`"${todo.title}" task is removed successfully`)
        }}>
            X</span>
        <hr/>
    </div>)
}

export default Todo