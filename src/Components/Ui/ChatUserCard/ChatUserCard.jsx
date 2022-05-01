import React from 'react'
import './ChatUserCard.css'

export const ChatUserCard = (props) => {
    const {idusuario, nombres} = props.userChatsInfo
    return (
        <div className="card_info_message">
            <div className="card_header">
                <p><strong>Demanda</strong> </p>
            </div>
            <div className="container_info_user_message">
                <div className="info_user">
                    <div className="image_info_user">
                        <img src="https://th.bing.com/th/id/R.0b38392068f1a05fa47f57298a322d8b?rik=mPlP%2fdmKTlKJcA&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED580%2f60b693cc6ea44.jpeg&ehk=rkyGW6IEJry944Hh4HJQBEFLF%2bQKbzuaq3RbOY0v6Gk%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
                    </div>
                    <p className="info_username">{nombres}</p>
                </div>
                <p className="info_date_message">{idusuario}</p>
            </div>
            <p className="last_message">No hay ultimo mensaje</p>
        </div>
    )
}
