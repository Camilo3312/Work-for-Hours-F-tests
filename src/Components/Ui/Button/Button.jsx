import React from 'react'
import './Button.css'

export const Button = ({style='button', value = 'boton', isLoading = false, ...props }) => {
    return (
        <button className={style} {...props} >
            { !isLoading ? 
                <p>{value}</p>
            :
               <div className="loader">Loading...</div>
            }
        </button>
    )
}
