import React,{useState} from 'react';
import {emitter} from '../../containers/todos'
import {notificationEmitter} from '../notification'
const AddTodo=()=>{
    const [title,setTitle]=useState()
    return (
    <div style={{position:"fixed",bottom:10,display:"block",width:"100%"}}>
        <form onSubmit={(e)=>{
            e.preventDefault();
            emitter.emit("ADD_TODO",{id:Math.random(),title,done:false})
            notificationEmitter.emit("SHOW_NOTIFICATION",`New Task '${title}' is added successfully !!`)
            setTitle("")
        }}>
        <input type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
         placeholder="Enter something here" 
         style={{padding:10,width:'90%'}}
        required/>
         <input type="submit" style={{padding:10,width:'6%'}} />
         </form>
    </div>
        )
}
export default AddTodo;