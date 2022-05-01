import React from 'react'
import { Navigate } from 'react-router-dom'

export function VerifyUserInSession(){
    let getRawData = localStorage.getItem('userData')
    let isUserInSession = getRawData != null || "" ? true : false
    return isUserInSession
}

export function GetUserInSessionData(){
    const rawUserData = localStorage.getItem('userData')
    if(rawUserData !== null || ""){
        return JSON.parse(rawUserData)
    }
}

export function verifyTypeOfLogin(){
    const rawData = GetUserInSessionData()
    if(rawData.idusuario == null || "" || undefined){
        const {GW, VX, kW} = rawData
            const newUserData = {
                idusuario : GW,
                nombres : VX,
                apellidos : kW
            }
        return newUserData
    }
    else{
        return GetUserInSessionData()
    }
}