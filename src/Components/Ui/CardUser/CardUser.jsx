import React from 'react'
import { PhotoUserProfile } from '../PhotoUserProfile/PhotoUserProfile'
import './CardUser.css'

export const CardUser = ({ infoUser, ...props }) => {
    const infoUserN = {
        name: infoUser.nombres,
        color: '',
        userPicture: infoUser.fotop
    }
    return (
        <div className="card_user" {...props}>
            <div className="header_card_user">
                <p className='name_service_header_card'>{infoUser.nombreservicio}</p>
            </div>
            <div className="body_card_user">
                <PhotoUserProfile infoProfile={infoUserN} style='small_profile' small={true} />
                <p className='name_card_user'>{infoUser.apellidos}</p>
            </div>
        </div>
    )
}
