import { CircularProgress } from '@mui/material';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

export default function ProviderPresenting(props) {

    const [isLoading, setLoading] = useState(true);
    const [provider, setProvider] = useState();

    useEffect(() => {
        async function getProvider() {
            try {

                const res = await axios.get('http://localhost:8088/provideer/getProvider/' + props.idp);
                console.log(res);
                setProvider(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }


        getProvider();
    }, [isLoading]);


    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>ProviderPresenting</div>
    )
}
