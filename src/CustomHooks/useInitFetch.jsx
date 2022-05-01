import React, { useEffect, useState } from 'react'

export const useInitFetch = ({ url }) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response)
            .then(response => {
                // setData(response)
                console.log(response);
            })
            .finally(setLoading(false))
        }

        get()
    }, [])


    return {
        data,
        loading,
        error
    }
}
