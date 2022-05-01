import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export const useChat = () => {
    const [connectionChat, setConnectionChat] = useState();
    const [messages, setMessages] = useState([]);
    const [currentRoom, setCurrentRoom] = useState("");

    const connectionRoom = async (room) => {
        const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_CS}/chat`)
        .configureLogging(LogLevel.Information)
        .build()
        
        
        connection.on("Recive", (messagess, usuario, fecha) => {
            setMessages(messages => [...messages, { messagess, usuario, fecha }])
        })

        connection.on("ShowConnected", (connection) => {
            console.log(connection);
        })

        connection.onclose(() => {
            setConnectionChat()
            setMessages([])
        });

        await connection.start()
        await connection.invoke("AddToGroup", String(room))
        setConnectionChat(await connection)
        setCurrentRoom(String(room))
        getMessage(room)
    }

    const sendMessage = async (message, name, token, date) => {
        await connectionChat.invoke("SendMessage", currentRoom, message, name, date)
        await saveMessage({
            mensaje: message, 
            fecha: '2022-04-18', 
            idsala: currentRoom, 
            token: token
        })       
    }

    const saveMessage = async (data) => {
        fetch(`${process.env.REACT_APP_API_CS}/Room/message/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    }

    const getMessage = async (room) => {
        fetch(`${process.env.REACT_APP_API_CS}/Room/messages/${room}`)
        .then(response => response.json())
        .then(response => {
            setMessages(response)
        })
    }

    const closeConnection = async () => {
        try {
          await connectionChat.stop();
        } catch (e) {
          console.log(e);
        }
    }
    
    return {
        connectionRoom,
        sendMessage,
        messages,
        closeConnection
    }
}
