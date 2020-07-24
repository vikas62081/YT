import React from 'react';
import { emitter } from '../../containers/todos'
import {notificationEmitter} from '../notification'
const Todo = ({ todo }) => {
    if (!todo) {
        return null;
    }
    const { id, title, done } = todo;
    const handleChange = () => {
        if(done) return ;
        emitter.emit("ACTION_CHANGED", id)
        const message = done ? `Task '${title}' is not done !` : `Task '${title}' is done :)`
        notificationEmitter.emit("SHOW_NOTIFICATION",message)
    }
    return (<div title={title}>
        <input type="checkbox" style={{margin:"0 10px"}} title={done?"Completed":"yet to Complete"} checked={done} onChange={() => handleChange()} />
        <span style={done?{textDecoration: "line-through"}:null}>{title}</span>
        <span align="right" style={{
            padding: '0 10px',
            position: "fixed",
            right: 20,
            fontWeight: 600,
            fontSize: 20,
            cursor: "pointer"
        }} title="delete task"
            onClick={() => {
                emitter.emit("DELETE_TASK", id)
                notificationEmitter.emit("SHOW_NOTIFICATION",`Task ${title} removed successfully`)
            }}>X</span>
        <hr />

    </div>)
}
export default Todo;