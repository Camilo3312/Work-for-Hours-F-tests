import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { GoogleButton } from '../../Ui/GoogleButton/GoogleButton'
import './FormLogin.css';

const API = process.env.REACT_APP_API;

export const FormLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allowAcces, setAllowAccess] = useState(false)

    const setInfoStorage = (userData) =>{
        localStorage.setItem('userData', JSON.stringify(userData))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API}/Ingreso`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify({
                contrasenna : password,
                correoElectronico: email
            })
        })
        const data= await res.json();
        if(data.length < 1){
            alert("ERROR, verify your email and password")
        }
        else{
            setAllowAccess(true)
            setInfoStorage(data[0])
        }
    }

    if(!allowAcces){
        return (
            <div className="login">
                <div className="container_form_login">
                    <p className="subtitle">Inicio de sesión</p>
                    <form className="form_login" onSubmit={handleSubmit}>
                        <input type="text" className="input" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <input type="password" className="input" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <input type="submit" className="button" defaultValue="Ingresar" />           
                    </form>
                    <GoogleButton/>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <Navigate to="/chat"/>
            </div> 
        )
    }
}