import { Button, CircularProgress } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, NavigsationControl, Popup } from 'react-map-gl';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ProviderElementOnMap from "../comp/provider/ProviderElementOnMap";

export default function AllProviderMap(props) {


    const [latitude, setlatitude] = useState()
    const [longitude, setlongitude] = useState()
    const [isLoading, setLoading] = React.useState(true);
    const [providers, setProviders] = React.useState();
    const [showPopup, setShowPopup] = React.useState(true);
    const [selectProvider, setSelectedProvider] = useState(null);
    const [viewport, setViewport] = useState({
        latitude: 34.639103858274176,
        longitude: 9.51784875479999,
        zoom: 5.5,
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
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
        <div class=" bodyyyy" style={{ marginBottom: '50px' }}>

            <Map
                mapboxAccessToken={
                    "pk.eyJ1IjoiOWE3dDYiLCJhIjoiY2xiZWF1MWdlMDluOTNvcGF6Zmx3bng2ayJ9.8bB7_aVExETntLYL9F0fOA"
                }
                {...viewport}
                style={{ width: '90vw', height: '50vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onMove={(v) => setViewport(v.viewState)}

            >
                {(props.prov) ? (props.prov.map(p =>
                    <ProviderElementOnMap p={p} />
                )) : (providers.map(p =>
                    <ProviderElementOnMap p={p} />
                ))}

                <GeolocateControl />
                <NavigationControl />
            </Map >

        </div>

    );
}

