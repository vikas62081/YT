import React,{useState} from 'react';
import {EventEmitter}  from 'fbemitter'
export const notificationEmitter=new EventEmitter();
const Notification=()=>{
const [open,setOpen]=useState(false)
const [message,setMessage]=useState()
const reset=()=>{
    setOpen(false)
}
const autoHideAfterTimeout=()=>{
    setTimeout(()=>{ reset()},5000)
}
notificationEmitter.addListener("SHOW_NOTIFICATION",(msg)=>{
setOpen(true)
setMessage(msg)
autoHideAfterTimeout()
})
if(!open){
return null;
}
return <div style={{border:"1px #319e2d solid",
     padding:10,marginBottom:15,
     backgroundColor:"#95e692",
     borderRadius:2,
     }}>
     <span>Success : {message}</span>
     </div>
}
export default Notification;