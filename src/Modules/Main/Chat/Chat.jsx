import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "Components/Layout/Header/Header";
import { DivShadow } from "Components/StyleComponets/DivShadow";
import { Title } from "Components/StyleComponets/Titlte";
import { CardUser } from "Components/Ui/CardUser/CardUser";
import { PhotoUserProfile } from "Components/Ui/PhotoUserProfile/PhotoUserProfile";
import { CardMessage } from "Components/Ui/CardMessage/CardMessage";
import { ButtonSend } from "Components/Ui/ButtonSend/ButtonSend";
import { InputText } from "Components/Ui/InputText/InputText";
import { useChat } from "CustomHooks/useChat";
import IconMessageChat  from 'Assets/Icons/IconMessageChat.png'
import { UserContext } from "Context/UserContext";

import './Chat.css';

export const Chat = () => {
    
    const chatRef = useRef()
    const [message, setMessage] = useState()
    const [ chats, setChats ] = useState() 
    const [currentChat, setCurrentChat] = useState(null);
    const { connectionRoom, sendMessage, closeConnection, messages } = useChat()
    const { getJwt, user, sendNotification } = useContext(UserContext) 

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_CS}/Room/chats/${getJwt()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(response => { 
            setChats(response)
        })
    },[])

    useEffect(()=>{
        if (chatRef && chatRef.current) {
            const { scrollHeight, clientHeight } = chatRef.current;
            chatRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight});
        }
    },[])

    useEffect(()=> {
        if (chatRef && chatRef.current) {
            const { scrollHeight, clientHeight } = chatRef.current;
            chatRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    },[messages])


    const DateNow = () => {
        const current = new Date();
        return current.toDateString();
    }

    return (
        <>
            <Header />
            <main className="main_chat">
                <div className="center_chat">
                    <DivShadow className='aside_chat'>
                        <div className="header_aside_chat">
                            <Title>Chat</Title>
                        </div>
                        <div className="cards_aside_chat">
                            {
                                chats?.map((item, index) => (
                                    <CardUser key={index} infoUser={item} onClick={() => { 
                                        closeConnection()
                                        connectionRoom(item.idsala)
                                        setCurrentChat(item)
                                    }} />
                                ))
                            }

                        </div>
                    </DivShadow>

                    {
                        currentChat ?
                            <DivShadow className='main_messages'>
                                <div className="header_messages_chat">
                                    <div className="information_user_header_chat">
                                        <PhotoUserProfile infoProfile={{name: currentChat.nombre, color: '', userPicture: currentChat.fotop}} small={false} style='small_profile' />
                                        <p className="name_user_header_chat">{currentChat.nombres}</p>
                                    </div>
                                </div>
                                <div className="main_messages_chat">
                                    <div ref={chatRef} className="messages_chat">
                                        {
                                            messages?.map((item, index) => (
                                                <CardMessage key={index} info={item} user={user.info[0].name} />
                                            ))
                                        }
                                    
                                    </div>
                                    <div className="">
                                        <form onSubmit={e => {
                                            e.preventDefault()
                                            setMessage('')    
                                        }} className="input_message_chat">    
                                            <InputText placeholder='Mensaje...' onChange={e =>setMessage(e.target.value)} value={message}/>
                                            <ButtonSend onClick={() => { 
                                                    console.log(currentChat.idusuario);
                                                    sendNotification(currentChat.idusuario, "Nuevo mensage", user.info[0].name, "#289fa5", user.info[0].userPicture)                                         
                                                    sendMessage(
                                                        message, 
                                                        user.info[0].name,
                                                        getJwt(),
                                                        DateNow()                                                
                                                    )   
                                                    setMessage('')  
                                                }                          
                                            } />
                                        </form>
                                    </div>
                                </div>                   
                            </DivShadow>
                            :
                            <DivShadow className='main_messages'>
                               <div className="message_chat">
                                    <img className='icon_message_chat' src={IconMessageChat} alt="" />
                                    <p className="title_app_info_chat">Work 4 hours</p>
                                    <div className="info_chat">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, sunt!
                                    </div>
                                </div>      
                            </DivShadow>
                    }


                </div>
            </main>
        </>
    )
}