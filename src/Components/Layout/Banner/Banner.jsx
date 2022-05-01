import React from 'react'
import './Banner.css'

export const Banner = ({informaction, image}) => {
    return (
        <div className='banner'>
            
            <div className="informacion_banner">           
                <p className="title_informacion_banner">{informaction.title}</p>
                <p className="informacion_banner_text">{informaction.info}</p>    
            </div>
            <div className="shadow_banner"></div>
            <img src={image} alt="" className="image_banner" />
            
        </div>      
    )
}
