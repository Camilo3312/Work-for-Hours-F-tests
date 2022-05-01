import React from 'react'
import './LoadingCardSearch.css'

export const LoadingCardSearch = () => {
    return (
        <div className='loading_card_search'>
            <div className="animation_load_search "></div>
            <div className="animation_load_search slow"></div>
            <div className="flex">
               
                <header className='header_card_service  header_load_search'>

                </header>
                <body className='body_card_service body_load_search'>
                    <div className="location_card_service text_load">
                        
                    </div>
                    <div className="location_card_service name_load">
                        
                    </div>
                </body>
            </div>
        </div>
    )
}
