import React from "react"
import { InputText } from "../InputText/InputText"
import './InputTextLabel.css'

export const InputTextLabel = ({titleLabel, ...props}) => {
    return (
       <div>
           <p className='title_label_input'>{titleLabel}</p>
           <InputText {...props} />
       </div>
    )
}