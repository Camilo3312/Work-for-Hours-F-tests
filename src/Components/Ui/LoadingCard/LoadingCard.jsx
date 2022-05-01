import React from 'react'
import './LoadingCard.css'

export const LoadingCard = () => {
    return (
        <div className='card_service loading_card'>
            <div className="animation_load"></div>
            <div className="animation_load slow"></div>
            <header className='header_card_service  header_load'>

            </header>
            <body className='body_card_service body_load'>
                <div className="location_card_service text_load">
                    
                </div>
                <div className="location_card_service name_load">
                    
                </div>
            </body>
        </div>
    )
}
