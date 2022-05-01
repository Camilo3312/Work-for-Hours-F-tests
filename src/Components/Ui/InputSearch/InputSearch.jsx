import React from "react"
import { ReactComponent as IconSearch } from 'Assets/Icons/IconSearch.svg'

import './InputSearch.css'

export const InputSearch = ({...props}) => {
    return (
        <div className="search">
            <IconSearch className='icon_search'/>
            <input className='input_search' type="search" {...props} />
        </div>
    )
}