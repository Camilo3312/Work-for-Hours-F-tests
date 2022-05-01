import { DefaultProfile } from 'Components/StyleComponets/DefaultProfile'
import React from 'react'

import './PhotoUserProfile.css'

export const PhotoUserProfile = ({ infoProfile, style, small, ...props}) => {
    const getCharaterName = (value) => {
        const character = value.substring(1,0).toUpperCase()
        return character
    }
    const {name,color, userPicture} = infoProfile
    return (
        <div className={style} {...props}>
            {
                userPicture ? 

                <div className="image_profile_user_">
                    <img className='image_user_' src={userPicture} alt="" />
                </div>
                :
                <DefaultProfile color={color} small={small}>
                    <h1 className='first_letter_name_user'>{getCharaterName(name)}</h1>
                </DefaultProfile>
            }
        </div>
    )
}
