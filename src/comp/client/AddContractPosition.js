import { Button, CircularProgress, Grid } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl';
import axios from 'axios';

const idp = JSON.parse(localStorage.getItem('idp'))

export default function AddContractPosition() {


    const [loading, setLoading] = React.useState(true);
    const [provider, setProvider] = React.useState();

    const [viewport, setViewport] = useState({
        latitude: 36.950800654859165,
        longitude: 10.143269862243068,
        zoom: 7,
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        async function getProvider() {
            try {
                const response = await axios.get('http://localhost:8088/provider/getProvider/' + idp.id);
                console.log(response);
                setProvider(response.data);
                console.log("ccccc", provider);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getProvider()
    }, [loading])
    console.log(viewport)

    const handleAddPosition = () => {
        setProvider({ ...provider, latitude: viewport.latitude.toString(), longitude: viewport.longitude.toString() })
        console.log("viwx", provider)

        axios.put('http://localhost:8088/provider/editProvider/' + idp.id, provider)
            .then((res) => {
                console.log(res)
                if (res.data.latitude == null) {
                    axios.put('http://localhost:8088/provider/editProvider/' + idp.id, provider)
                }
                // window.location.reload(false)
            })
            .catch(err => {
                console.log(err)
            })

    }
    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }

    return (
        <div class=" bodyyyy" style={{ marginBottom: '50px' }}>
            <Grid container spacing={4} direction={"column"}>
                <Grid item xs={12}>
                    <Map
                        mapboxAccessToken={
                            "pk.eyJ1IjoiOWE3dDYiLCJhIjoiY2xiZWF1MWdlMDluOTNvcGF6Zmx3bng2ayJ9.8bB7_aVExETntLYL9F0fOA"
                        }
                        {...viewport}
                        style={{ width: '400px', height: '400px' }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        onMove={(v) => setViewport(v.viewState)}

                    >
                        <Marker longitude={viewport.longitude} latitude={viewport.latitude} anchor="bottom" >
                        <img style={{ width: '3.5vw', height: '4vh' }} src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />

                        </Marker>
                        <GeolocateControl />
                        <NavigationControl />
                    </Map >
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleAddPosition} variant="contained">Add position</Button>

                </Grid>
            </Grid>


        </div>

    );
}

