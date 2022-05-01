import React from "react"

import './InputCheckbox.css'

export const InputCheckbox = ({name, ...props}) => {
    return (
        <label className='input_checkbox'>
            <input className="checkbox" type="checkbox" {...props} />
            <p className="name_checkbox">{name}</p>
        </label>
    )
}