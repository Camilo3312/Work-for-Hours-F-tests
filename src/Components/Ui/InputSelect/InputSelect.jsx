import React from 'react'
import './InputSelect.css'

export const InputSelect = ({nameSelect,options, active = true, ...props}) => {

    return (
        <select className={`select_input ${active ? '' : 'select_active' }`} {...props} >
            <option value="">{nameSelect}</option>
            {
                options.map((item,index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    )
}