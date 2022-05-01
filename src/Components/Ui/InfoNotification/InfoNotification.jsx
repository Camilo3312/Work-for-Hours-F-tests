import React from 'react'
import { PhotoUserProfile } from '../PhotoUserProfile/PhotoUserProfile'
import './InfoNotification.css'

export const InfoNotification = ({infoProfile}) => {
    return (
        <div className="info_nav_bar_notifications">
            <PhotoUserProfile infoProfile={infoProfile} style='small_profile' small={true} />
            <div className="info_nav_bar_notification">
                <p className='username_nav_bar_notification'>{infoProfile.name}</p>
                <p className='message_nav_bar_notification'>Nuevo mensage</p>
            </div>
        </div>
    )
}
