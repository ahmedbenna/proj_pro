import { Button, CircularProgress } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl';
import axios from 'axios';


const idp = JSON.parse(localStorage.getItem('idp'))

export default function ProviderPosition(props) {


  const [loading, setLoading] = React.useState(true);
  const [provider, setProvider] = React.useState();
  // 36.89810631199871, 10.190106466838042
  const [viewport, setViewport] = useState({
    latitude: parseFloat(props.lat),
    longitude: parseFloat(props.lon),
    zoom: 13,
    width: window.innerWidth,
    height: window.innerHeight
  }
  );
  useEffect(() => {
    async function getProvider() {
      try {
        const response = await axios.get('http://localhost:8088/provider/getProvider/' + idp.id);
        console.log(response);
        setProvider(response.data);
        console.log("pos", provider);
        // setViewport({
        //   latitude: parseFloat(provider.latitude),
        //   longitude: parseFloat(provider.longitude),
        //   zoom: 7,
        //   width: window.innerWidth,
        //   height: window.innerHeight
        // })
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getProvider()
  }, [loading])
  if (loading) {

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
        <Marker longitude={parseFloat(provider.longitude)} latitude={parseFloat(provider.latitude)} anchor="bottom" >
            <img style={{ width: '3.5vw', height: '4vh' }} src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />
        </Marker>
        <GeolocateControl />
        <NavigationControl />
      </Map >

    </div>

  );
}

