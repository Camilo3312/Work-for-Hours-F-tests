import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export const useNotifications = () => {

    const [connectionNotf, setConnectionNotf] = useState();

    const userConnection = async (user) => {
        const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_CS_NOTF}/notifications`)
        .configureLogging(LogLevel.Information)
        .build()

        connection.on("ReciveMessage", (message, username, color) => {
            console.log(message, username, color);
            console.log('mensage recivido');
        })

        connection.on("ShowConnected", (connection) => {
            // console.log(connection);
        })

        connection.onclose(() => {
            setConnectionNotf()
        });

        await connection.start()
        await connection.invoke("ConnectionNotf", String(user))
        setConnectionNotf(await connection)
        window.localStorage.setItem('user_connection', JSON.stringify(await connection))
    }
    
    const sendNotification = async (userId, message, username, color) => {
        const connectionL = (JSON.parse(window.localStorage.getItem('user_connection')))
        await connectionNotf.invoke("SendNotification", String(userId), message, username, color)    
    }

    const closeConnectionNotf = async () => {
        try {
          await connectionNotf.stop();
        } catch (e) {
          console.log(e);
        }
    }

    return {
        userConnection,
        sendNotification,
        closeConnectionNotf
    }
}
