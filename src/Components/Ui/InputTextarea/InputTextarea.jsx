import React from 'react'
import './InputTextarea.css'

export const InputTextarea = ({...props}) => {
    return (
        <textarea {...props} className='input_textarea' cols="30" rows="10"></textarea>
    )
}
