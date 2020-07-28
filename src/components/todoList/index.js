import React from 'react'

const Todo=({todo,removeTodo,handleChange})=>{
 console.log(todo)
    const hanldeCheckboxChange=()=>{
        if(todo.done)
            return null;
        handleChange(todo.id)
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
        onClick={()=>{removeTodo(todo.id)}}>
            X</span>
        <hr/>
    </div>)
}

export default Todo