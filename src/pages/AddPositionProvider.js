import { Button } from "@mui/material";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import axios from 'axios';
async function addPos(latitude,longitude) {
  console.log("aaa",latitude)
  console.log("bbb",longitude)
    try {
      const response = await axios.put('http://localhost:8088/client/editClient/', {
        position:{
          latitude:latitude,
          longitude:longitude
        }
      });
      console.log(response);

      // window.location.reload(false)
    } catch (error) {
      console.error(error);
    }
  }
export default function AddPositionProvider() {


  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState()
  const [viewport, setViewport] = useState({
    latitude: 36.950800654859165,
    longitude: 10.143269862243068,
    zoom: 8,
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
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    });
  }, [])
  

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
          <img src="../assets/img/pin.png" />
        </Marker>
        <GeolocateControl />
        <NavigationControl />
      </Map >
      <Button type='submit' onClick={(e)=>{addPos(viewport.longitude,viewport.latitude)}}>add my position</Button>

    </>

  );
}

