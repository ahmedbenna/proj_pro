import { Button, CircularProgress } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl';
import axios from 'axios';
export default function ProviderMap() {


    const [latitude, setlatitude] = useState()
    const [longitude, setlongitude] = useState()
    const [isLoading, setLoading] = React.useState(true);
    const [providers, setProviders] = React.useState();
    const [showPopup, setShowPopup] = React.useState(true);

    const [viewport, setViewport] = useState({
        latitude: 36.950800654859165,
        longitude: 10.143269862243068,
        zoom: 7,
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        // 36.950800654859165, 10.143269862243068
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setlatitude(position.coords.latitude)
            setlongitude(position.coords.longitude)
            
        });

        async function getProviders() {
            try {
                const response = await axios.get('http://localhost:8088/provider/getAllProvider');
                console.log(response);
                setProviders(response.data);
                console.log("ccccc", providers);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getProviders()
    }, [isLoading])
    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }

    return (
        <>
            <Map
                mapboxAccessToken={
                    "pk.eyJ1IjoiOWE3dDYiLCJhIjoiY2xiZWF1MWdlMDluOTNvcGF6Zmx3bng2ayJ9.8bB7_aVExETntLYL9F0fOA"
                }
                {...viewport}
                style={{ width: '50vw', height: '50vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onMove={(v) => setViewport(v.viewState)}

            >
                <Marker longitude={viewport.longitude} latitude={viewport.latitude} anchor="bottom" >
                    <div>
                        <img style={{ width: '20px', height: '20px' }} src="../assets/img/pin.png" />
                    </div>
                </Marker>
                <GeolocateControl />
                <NavigationControl />
            </Map >

        </>

    );
}

