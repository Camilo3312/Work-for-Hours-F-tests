import React from 'react'
const API = process.env.REACT_APP_API;

export default getChatMessages = async(sala) => {
    const res = await fetch(`${API}/chat/${sala}`)
    const messages = await res.json()
    if(messages.length >= 1){
        return messages
    }
    else{
        return false
    }
}
