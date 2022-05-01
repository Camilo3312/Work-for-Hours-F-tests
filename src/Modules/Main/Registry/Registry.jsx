import React, { useEffect, useState } from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Link } from 'react-router-dom'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Title } from 'Components/StyleComponets/Titlte'

import './Registry.css'
import { InputSelect } from 'Components/Ui/InputSelect/InputSelect'
import { SelectTextLabel } from 'Components/Ui/SelectTextLabel/SelectTextLabel'
export const Registry = () => {

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [birthdate, setBirthdate] = useState(null)
    const [picture, setPicture] = useState(null)
    const [city, setCity] = useState(null)

    const login = async () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API}/registry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name : name,
                lastName: surname,
                phoneNumber: phone,
                address: address,
                email: email,
                password: password,
                birthDate: birthdate,
                picture: picture,
                city: city                   
            })

        })
        .then(response => response.json())
        .then(user => {
            setResults(user)
            console.log(user);
        })
        .finally(() => setLoading(false))
    }

    const optionsl = [
        {
            id: 1,
            name: "Quindio"
        },
        {
            id: 2,
            name: "Choco"
        }
    ]

    const options2 = [
        {
            id: 1,
            name: "Armenia"
        },
        {
            id: 2,
            name: "Choco"
        }
    ]

    return (
        <main className='registry'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1647117029/k8fv4rdcwvk6bwtcqzid.png" alt="" />

           <div className="center_main_registry">
                <DivShadow className='container_form_registry'>
                    <div className="padding_form_register"> 
                        <header className='header_registry'>
                            <Title>Registro</Title>
                            <Link className='link_login_form_register' to='/login'>¿Ya tienes una cuenta?</Link> 
                        </header>
                        <form className='form_registry' onSubmit={login}>
                            <div className="subtitle_form_registry">
                                <p>Datos basicos</p>
                            </div>
                            <section className="basic_data">                     
                                <InputTextLabel titleLabel='Nombres' placeholder='Camilo' onChange={e => setName(e.target.value)} />
                                <InputTextLabel titleLabel='Apellidos' placeholder='Lopez' onChange={e => setSurname(e.target.value)}  />
                                <InputTextLabel titleLabel='Celular' placeholder='Celular' type='number'  onChange={e => setPhone(e.target.value)}  />
                                <InputTextLabel titleLabel='Fecha de nacimiento' type='text' onChange={e => setBirthdate(e.target.value)} />                         
                                <SelectTextLabel
                                 titleLabel='Seleccione su departamento'
                                 nameSelect='Departamento'
                                 options={optionsl}
                                 onChange={(e) => console.log(e.target.value)}/>

                                 <SelectTextLabel
                                 titleLabel='Seleccione su ciudad'
                                 nameSelect='Ciudad'
                                 options={options2}
                                 onChange={(e) => console.log(e.target.value)}/>
                            
                            </section>

                            <div className="subtitle_form_registry">
                                <p>Cuenta</p>
                            </div>
                            <section className="acount_data">
                                <InputTextLabel titleLabel='Email' placeholder='correo' type='email' onChange={e => setEmail(e.target.value)} />
                                <InputTextLabel titleLabel='Contraseña' placeholder='contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                            </section>
                            <Button value='Registrar cuenta' isLoading={loading} />
                        </form>    
                    </div>
                </DivShadow>

                <div className="information_app">
                    <h1 className='title_info_app'>Work 4 Hours</h1>
                </div>
            </div> 

        </main>
    )
}