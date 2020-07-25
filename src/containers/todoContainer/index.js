import React from 'react';
import Todo from '../../components/todoList';
const todoList=[
    {id:1,title: 'Learn React',done:true},
    {id:2,title: 'Create a todo Application',done:false},
]
const TodoContainer = () => {
    return (<div style={{ margin: 20 }}>
        <h4 align="center">Todo Application</h4>
        {todoList.map((todo)=><Todo todo={todo} />)}
       
    </div>)
}

export default TodoContainer