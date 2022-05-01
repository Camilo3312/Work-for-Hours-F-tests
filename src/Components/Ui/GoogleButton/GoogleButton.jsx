import React from "react";
import GoogleLogin from 'react-google-login';
import './GoogleButton.css';

export const GoogleButton = () => {
    const responseGoogle = (response) => {
        localStorage.setItem('userData', JSON.stringify(response.Au))
    }

    return (
        <>
            <GoogleLogin
                clientId="631520158448-5ih1kg1l0bp3ss74hjmf1r4i6ao8ofqa.apps.googleusercontent.com"
                buttonText="Ingresar con google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}