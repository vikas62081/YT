import React, { useState } from 'react';
import {EventEmitter}  from 'fbemitter'
import Todo from '../../components/todoList';
import AddTodo from '../../components/addTodo';
import Notification from '../../components/notification';
const todoList = [
    { id: 1, title: "Wash your hand", done: false },
    { id: 2, title: "Go for morning walk", done: true },
]
export const emitter=new EventEmitter();
const TodoContainer = () => {
    const [todos, setTodos] = useState(todoList)
    emitter.addListener("ADD_TODO",(todo)=>{
        const newTodoList=[...todos,todo]
        setTodos(newTodoList)
    })
    emitter.addListener("ACTION_CHANGED",(id)=>{
        const newTodoList=todos.map(todo=>{
            if(todo.id===id)
                return {...todo,done:!todo.done}
            return todo;
            })
            setTodos(newTodoList)
    })
    emitter.addListener("DELETE_TASK",id=>{
        const newTodoList=todos.filter(todo=>todo.id!==id)
        setTodos(newTodoList)
    })
    return (<div style={{ margin: 20 }}>
        <h4 align="center">Todo Application</h4>
        <Notification/>
        {todos.length>0?todos.map(todo => <Todo todo={todo} />):<p align="center">No todo left</p>}
        <AddTodo />
    </div>)
}
export default TodoContainer;