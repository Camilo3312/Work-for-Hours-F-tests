import { InputSearch } from 'Components/Ui/InputSearch/InputSearch'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchEngine.css'

export const SerchEngine = () => {
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = useState(null)

    const search =  (e) => {
        e.preventDefault()
        navigate(`/search/q/${valueSearch}`)
    }
    return (
        <div className="serch_engine">
            <div className="center_serch_engine">
                <form onSubmit={search}>
                    <InputSearch placeholder='Buscar servicios...' onChange={e => setValueSearch(e.target.value)} />
                    <input type="submit" value="" className='action_search' />
                </form>
            </div>
        </div>
    )
}
