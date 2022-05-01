import React, {useState,useEffect} from 'react'
import { verifyTypeOfLogin } from '../../../Functions/ReusableFunctions'
import "./MessageCard.css"

export const MessageCard = ({messageObject,key}) => {
    const userId = verifyTypeOfLogin() 
    const {idmensaje,mensaje,fecha,idusuario} = messageObject

    const [messageStyle, setMessageStyle] = useState("")


    const decideMessageSide = () =>{
        if(idusuario !== userId.idusuario){
            setMessageStyle("card_message in")
        }else{
            setMessageStyle("card_message out")
        }
    }

    useEffect(() => {
        decideMessageSide()
    })
    
    return (
        <div>
            <div className={messageStyle}>
                <div className="body_message">
                    <p className="date_message">{fecha}</p>
                    <p className="message">{`${mensaje} ${idusuario}`}</p>
                </div>
            </div>  
        </div>
    )
}