import React from 'react'
import IconSendMessage from 'Assets/Icons/IconSendMessage.png'
import './ButtonSend.css'

export const ButtonSend = ({...props}) => {
    return (      
        <button className="button_send" {...props}>
            <img className='icon_send_message' src={IconSendMessage} alt="" />
        </button>
    )
}
