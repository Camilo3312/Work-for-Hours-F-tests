import React from 'react'
import { Link } from 'react-router-dom'

import './LinkOption.css'

export const LinkOption = ({link = '', isLink=true, text = 'Link', ...props}) => {
    return (
        <div className="container_link_option" {...props}>
            {
                isLink ?
                    <Link className='link_option' {...props} to={link} >
                        <p className='text_link_option'>{text}</p>
                    </Link>
                :
                <div className='link_option' {...props} to={link} >
                    <p className='text_link_option'>{text}</p>
                </div>
            }
        </div>  
    )
}
