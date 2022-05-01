import React, { useState } from 'react'
import './FormRegistry.css';
const API = process.env.REACT_APP_API;

export const FormRegistry = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [birthDate, setBirthDate] = useState("")

    const completedInputs = () => {
        if (name === "" || lastName === "" || email === "" || phoneNumber === "" || password === "" || birthDate === "") {
            return false
        }
        else {
            return true
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(completedInputs()){
            const res = await fetch(`${API}/usuarios`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body:JSON.stringify({
                    nombres : name,
                    apellidos : lastName,
                    celular : phoneNumber,
                    correoElectronico : email,
                    contrasenna : password,
                    fecNac : birthDate
                })
            })
            const data = await res.json();
            console.log(data)
            const validFetch = !data.result == true ? alert("User succesfuly registered") : alert("This user already exist");
        }
        else{
            alert("please complete the form")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form_register">
            <label>Nombres</label>
            <input type="text" className="input" onChange={e => setName(e.target.value)} value={name} placeholder="Nombres" />
            
            <label>Apellidos</label>
            <input type="text" className="input" onChange={e => setLastName(e.target.value)} value={lastName} placeholder="Apellidos" />
            
            <label>Numero Telefónico</label>
            <input type="text" className="input" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="Numero telefónico" />
            
            <label>Dirección Email</label>
            <input type="email" className="input" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} value={email} placeholder="Dirección Email" />
            
            <label>Contraseña</label>
            <input type="password" className="input" onChange={e => setPassword(e.target.value)} value={password} placeholder="contraseña" />
            
            <label>Fecha de nacimiento</label>
            <input type="date" className="input" onChange={e => setBirthDate(e.target.value)} value={birthDate} />
            
            <button type="submit" className="button">Registrarse</button>
        </form>
    )
}