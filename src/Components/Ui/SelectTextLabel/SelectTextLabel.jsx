import React from 'react'
import { InputSelect } from '../InputSelect/InputSelect'
import './SelectTextLabel.css'

export const SelectTextLabel = ({titleLabel, nameSelect="Seleccione", options, active, ...props}) => {

    return (
        <div>
            <p className='title_label_input'>{titleLabel}</p>
            <InputSelect nameSelect={nameSelect} options={options} {...props} active={active} />
        </div>
    )
}