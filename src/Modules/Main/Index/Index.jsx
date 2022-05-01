import React, { useContext, useEffect, useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { Link } from "react-router-dom"
import { UserContext } from "Context/UserContext"
import { LoadingCard } from "Components/Ui/LoadingCard/LoadingCard"
import { useInitFetch } from "CustomHooks/useInitFetch"

import './Index.css'

export const Index = () => {
    const { isAuth } = useContext(UserContext)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    
    // const { data, loading } = useInitFetch(`${process.env.REACT_APP_API}`)

    useEffect(()=> {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(user => {
                setResults(user)
            })
            .finally(() => setLoading(false))
        }
        get()
    },[])
    
    return (
        <>                    
            <Header />
            <SerchEngine/>
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={{title: "Services", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />               
                    </section>
                    <p className="title_index">Mejor calificados</p>
                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'>                                                 
                            {
                                loading ?   
                                <>
                                    <LoadingCard/>
                                    <LoadingCard/>
                                </>                          
                                :
                                results?.map((item, index) =>  <Link key={index} to='/infoservice' className='link_card_service'><CardService info={item} /></Link>)
                            }                                
                        </DivShadow>                 
                    </section>
                </div>
            </main>
        </>
    )
}