import { Button, CircularProgress, Grid } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl';
import axios from 'axios';

const idc = JSON.parse(localStorage.getItem('idc'))
// console.log(idc)
export default function AddContractPosition(props) {


    const [data, setData] = React.useState();

    const [viewport, setViewport] = useState({
        latitude: 36.950800654859165,
        longitude: 10.143269862243068,
        zoom: 7,
        width: window.innerWidth,
        height: window.innerHeight
    });


    // console.log(viewport)

    const handleAddContract = () => {
        setData({
            latitude: viewport.latitude,
            longitude: viewport.longitude,
            provider: {
                id: props.pr.id
            },
            job: {
                idJob: props.jo.idJob,
            },
            client: {
                id: idc.id
            }



        })

        axios.post('http://localhost:8088/contract/add/', {
            latitude: viewport.latitude,
            longitude: viewport.longitude,
            provider: {
                id: props.pr.id
            },
            job: {
                idJob: props.jo.idJob,
            },
            client: {
                id: idc.id
            }



        })
            .then((res) => {
                console.log(res)
                window.location = '/clientProfile'
            })
            .catch(err => {

                console.log(err)
            })

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
                        style={{ width: '90vw', height: '70vh' }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        onMove={(v) => setViewport(v.viewState)}

                    >
                        <Marker longitude={viewport.longitude} latitude={viewport.latitude} anchor="bottom" >
                            <img style={{ width: '20px', height: '25px' }} src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />

                        </Marker>
                        <GeolocateControl />
                        <NavigationControl />
                    </Map >
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleAddContract} variant="contained">Confirme</Button>

                </Grid>
            </Grid>


        </div>

    );
}

