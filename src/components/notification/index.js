import React, { useState } from 'react'
import { EventEmitter } from 'fbemitter'

export const emitter = new EventEmitter();

const Notification = () => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState()
    const notificationStyle = {
        padding: 10,
        border: "1px green solid",
        marginBottom: 15,
        backgroundColor: "#55c555",
        borderRadius: 2
    }
    const reset = () => {
        setOpen(false)
    }
    const autoHideAfterTimeout = () => {
        setTimeout(() => reset(), 5000)
    }
    emitter.addListener("NOTIFICATION", (msg) => {
        setMessage(msg)
        setOpen(true)
        autoHideAfterTimeout()
    })
    if (!open) {
        return null
    }
    return <div style={notificationStyle}><span>{message}</span></div>
}

export default Notification