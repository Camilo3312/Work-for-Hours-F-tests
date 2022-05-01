import { useLogin } from 'CustomHooks/useLogin';
import { useNotifications } from 'CustomHooks/useNotifications';
import React, { createContext, useEffect, useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import Notification from 'Assets/Sounds/Notification.mp3'
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const music = new Audio(Notification);
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('loggerAuthUser')))
    const [isLoading, setIsLoading] = useState(null)
    const [notifications, setNotifications] = useState([]);
    const [isAlert, setIsAlert] = useState(false);
    const [connectionNotf, setConnectionNotf] = useState();

    const userConnection = async (user) => {
        const connection = new HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_API_CS_NOTF}/notifications`)
            .configureLogging(LogLevel.Information)
            .build()

        connection.on("ReciveMessage", (userId, message, username, color, imageProfile) => {
            music.play();
            setIsAlert(true)
            setNotifications(notifications => [...notifications, { userId, message, username, color, imageProfile }])       
        })

        connection.on("ShowConnected", (connection) => {
            console.log(connection);
        })

        connection.onclose(() => {
            setConnectionNotf()
        });

        await connection.start()
        await connection.invoke("ConnectionNotf", String(user))
        setConnectionNotf(await connection)
        console.clear()
    }

    const sendNotification = async (userId, message, username, color, imageProfile) => {
        await connectionNotf.invoke("SendNotification", String(userId), message, username, color, imageProfile)
    }

    const closeConnectionNotf = async () => {
        try {
            await connectionNotf.stop();
        } catch (e) {
            console.log(e);
        }
    }

    const login = async (credencials) => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(
                {
                    email: credencials.email,
                    password: credencials.password
                }
            )
        })
            .then(response => response.json())
            .then(user => {
                if (user.userInfo.token) {
                    console.log("Logueado");
                    setUser(user.userInfo)
                    window.localStorage.setItem(
                        'loggerAuthUser', JSON.stringify(user.userInfo)
                    )
                    userConnection(jwt_decode(user.userInfo.token).id)
                }
            }).finally(() => setIsLoading(false))
    }

    const isAuth = () => {
        const logged = window.localStorage.getItem('loggerAuthUser')
        if (logged) {
            return true
        } else {
            return false
        }
    }

    const getJwt = () => {
        return user.token
    }

    const logout = () => {
        window.localStorage.removeItem('loggerAuthUser')
        window.location.reload()
    }

    useEffect(() => {
        if (isAuth()) {
            closeConnectionNotf()
            userConnection(jwt_decode(user.token).id);
        }
    }, [])

    const data = { user, login, logout, isLoading, isAuth, getJwt, sendNotification, isAlert, notifications }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

