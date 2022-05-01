import { DivShadow } from 'Components/StyleComponets/DivShadow'
import React, { useContext, useEffect, useState } from 'react'
import { Title } from 'Components/StyleComponets/Titlte'
import { InputTextLabel } from 'Components/Ui/InputTextLabel/InputTextLabel'
import { Button } from 'Components/Ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from 'Context/UserContext'

import './Login.css'

export const Login = () => {
    const navigate = useNavigate()
    const { login, isAuth, isLoading } = useContext(UserContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email: email, password: password})
    }

    useEffect(()=> {
        !isLoading && isAuth() ? 
            navigate('/') 
            :
            console.log('Error credencials');
    },[isLoading])

    return (
        <main className='login'>
            <div className="background_registry"></div>
            <img className='background_image' src="https://res.cloudinary.com/sena-quindio/image/upload/v1647117029/k8fv4rdcwvk6bwtcqzid.png" alt="" />
            <div className="center_main_login">
                <div className="information_login_app">
                    <h1 className='title_info_login_app'>Work 4 Hours</h1>
                    <p className='info_login'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nihil accusantium at voluptate. Dolore cumque provident veritatis blanditiis quibusdam, sequi enim</p>
                </div>
                <DivShadow className="container_form_login">
                    <div className="padding_container_form_login">
                        <Title>Iniciar sesión</Title>
                        <form className='form_login' onSubmit={handleLogin}>
                            <InputTextLabel titleLabel='Correo' placeholder='Correo' onChange={e => setEmail(e.target.value)} />
                            <InputTextLabel titleLabel='Contraseña' placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                            <Link className='link_recover_password' to='/'>Recuperar contraseña</Link>
                            <Button value='Ingresar' isLoading={isLoading} />
                        </form>

                        <div className="info_register">
                            <p>¿No tienes cuenta?</p>
                            <Link className='link_registry' to='/registry'>Registrate</Link>
                        </div>
                    </div>
                </DivShadow>
            </div>
        </main>
    )
}