import React from "react"
import './InputText.css'

export const InputText = ({...props}) => {
    return (
       <input className='input_text' {...props} />
    )
}