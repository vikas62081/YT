import React ,{useState} from 'react';
import Todo from '../../components/todoList';
import AddTodo from '../../components/addTodo';
const todoList=[
    {id:1,title: 'Learn React',done:true},
    {id:2,title: 'Create a todo Application',done:false},
]
const TodoContainer = () => {
    const [todos,setTodos]=useState(todoList)
  const handleAddTodo=(newTodo)=>{
      const newTodoList=[...todos,newTodo]
      setTodos(newTodoList)
  }
    return (<div style={{ margin: 20 }}>
        <h4 align="center">Todo Application</h4>
        {todos.map((todo)=><Todo todo={todo} />)}
       <AddTodo addTodo={handleAddTodo}/>
    </div>)
}

export default TodoContainer