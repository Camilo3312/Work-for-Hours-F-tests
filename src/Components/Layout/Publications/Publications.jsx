import { Title } from 'Components/StyleComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import IconChecked from 'Assets/Icons/IconChecked.png'
import IconDanger from 'Assets/Icons/IconDanger.png'

import React from 'react'

export const Publications = () => {
    const service = {
        price: "200.000",
        image: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        title: "Pinto casas a domicilio Lorem",
        reports: 0
    }
    return (
        
        <main className="publications_dashboard">
            <Title>Mis servicios - Publicados</Title>
            <section className='table_services'>
                <div clasS="header_table_services">
                    <div class="row_table_services_header">
                        <div></div>
                        <div>Informacion</div>
                        <div>Reportes</div>
                        <div>Operaciones</div>
                    </div>
                </div>
                <div clasS="body_table_services">

                    <div class="row_table_services">
                        <img className='image_info_service_table' src="https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png" alt="" />
                        <div className='info_service_table'>
                            <p className='title_service_table'>{service.title}</p>
                            <p className='location_service_table'>{service.city} {service.departament}</p> 
                            <p className='price_service_table'>$ {service.price} por hora</p>
                        </div>
                        <div className='report_info_table'>
                            {
                                service.reports > 0 ?
                                <div className="danger_reports">
                                    <img className='icon_danger_table' src={IconDanger} alt="" />
                                    <p className='value_report'>{service.reports}</p>
                                </div>
                                :
                                <div className="danger_reports">
                                    <img className='icon_checked_table' src={IconChecked} alt="" />
                                    <p className='value_not_report'>No hay reportes</p>
                                </div>
                            }
                        </div>
                        <div className='operations_info_table'>
                            <Button value='Editar'/>
                            <Button value='Eliminar'/>
                        </div>
                    </div>
                </div>
            </section>         
        </main>    
    )
}
