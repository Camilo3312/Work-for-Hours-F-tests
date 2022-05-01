import React, { useEffect, useState } from 'react'
import { SerchEngine } from 'Components/Layout/SearchEngine/SearchEngine'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { useParams } from 'react-router'
import { Title } from 'Components/StyleComponets/Titlte'
import { Header } from 'Components/Layout/Header/Header'
import { CardServiceSearch } from 'Components/Ui/CardServiceSearch/CardServiceSearch'

import './SearchService.css'
import { LoadingCard } from 'Components/Ui/LoadingCard/LoadingCard'
import { Link } from 'react-router-dom'
import { LoadingCardSearch } from 'Components/Ui/LoadingCardSearch/LoadingCardSearch'

export const SearchService = () => {

    const params = useParams()
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}/searchServices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    serviceName : params.question
                })

            })
            .then(response => response.json())
            .then(user => {
                setResults(user)
            })
            .finally(() => setLoading(false))
        }
        get()
    },[params])

    return (
        <>
            <Header/>
            <SerchEngine/>
            <main>
                <div className="center_main_search">
                    <DivShadow className='search_info'>
                        <header className="header_search_info">
                            <Title>{params.question}</Title>
                            <p className=''>{results.length} Busquedas</p>
                        </header>  
                        <div className="filter_search_info">
                            <p>Filtros de busqueda</p>
                        </div>
                    </DivShadow>
                    <DivShadow className='search_services'>
                            {
                                loading ?   
                                <>
                                    <LoadingCardSearch/>
                                    <LoadingCardSearch/>
                                </>                          
                                :
                                results.map((item, index) =>  <Link key={index} to='/infoservice' className='link_card_service'><CardServiceSearch info_service={item}/></Link>)
                            }                      
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
