import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption'
import { Link, Outlet, useParams } from 'react-router-dom'
import React from 'react'

import './Dashboard.css'

export const Dashboard = () => {

    return (
        <>
            <Header />
            <main className='main_dasboard'>
                <div className="center_dashboard">
                    <div className="aside_operations_dashboard">
                        <DivShadow className='title_dasboard'>
                            <p className='title_dashboard_info'>Administrar servicios</p>
                        </DivShadow>
                        <DivShadow className='operations_dashboard'>
                            <LinkOption link='publications' text='Publicados' />
                            <LinkOption link='saved' text='Borradores' />
                            <div className="padding_button_service_add"> 
                                <Link to='/service/add'><Button value='Agregar servicio' /></Link>
                            </div>
                        </DivShadow>
                    </div>

                    <DivShadow className='main_dashboard'>
                        <Outlet />
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
