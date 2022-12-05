import React from 'react'
import SearchBox from '../comp/Home/SearchBox';
import ProviderCard from '../comp/provider/ProviderCard';
import axios from 'axios';
import { useState } from 'react';
import { Autocomplete, Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';

async function getProviderByCity() {
    try {
        const response = await axios.post('http://localhost:8088/client/signup');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function getProviderByspeciality() {
    try {
        const response = await axios.post('http://localhost:8088/client/signup');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default function SearchResult() {

    const [specialitys, setSpecialitys] = useState();
    const [citys, setCitys] = useState();



    const [speciality, setSpeciality] = useState(null);
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notValid, setNotValid] = useState(false);
    console.log("auto sp", speciality)
    console.log("auto ci", city)


     const handelSearch = (e)=> {
            if (city != null && speciality != null) {
                setNotValid(false)
                try {
                    const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
                    console.log(response);
                    setSpecialitys(response.data);
                    console.log("ccccc", specialitys);
                    // setLoading(false);
                } catch (error) {
                    console.error(error);
                }
            }else if ((city != null && speciality == null)){
                setNotValid(false)
                try {
                    const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
                    console.log(response);
                    setSpecialitys(response.data);
                    console.log("ccccc", specialitys);
                    // setLoading(false);
                } catch (error) {
                    console.error(error);
                }
            }else if ((city == null && speciality != null)) {
                setNotValid(false)
                try {
                    const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
                    console.log(response);
                    setSpecialitys(response.data);
                    console.log("ccccc", specialitys);
                    // setLoading(false);
                } catch (error) {
                    console.error(error);
                }
            }else {
                setNotValid(true)
            }
        
        }
    useEffect(() => {

        async function getSpeciality() {
            try {
                const response = await axios.get('http://localhost:8088/speciality/getAllSpeciality');
                console.log(response);
                setSpecialitys(response.data);
                console.log("ccccc", specialitys);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        async function getCity() {
            try {
                const response = await axios.get('http://localhost:8088/city/getAllCity');
                console.log(response);
                setCitys(response.data);
                console.log("ccccc", citys);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getCity();
        getSpeciality();
        console.log("city", specialitys)
    }, [loading]);

    
 
    if (loading == true) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={"30px"}
                // minHeight=""
                backgroundColor="#030f27"
            >
                <CircularProgress />
            </Box >
        )
    } else if (loading == false) {
        return (
            <div className="team">
                <div className="container">
                    <div class="section-header text-center">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={"30px"}
                            // minHeight=""
                            backgroundColor="#030f27"
                        >
                            < Grid container spacing={2} justify="center">
                                <Grid item xs={12}>
                                    <div className="fact-text">
                                        {/* <h2 data-toggle="counter-up">109</h2> */}
                                        <p>Search a provider next to you! </p>
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={specialitys}
                                        value={speciality}
                                        // getOptionLabel={(c)=>console.log(c)}
                                        onChange={(event, newValue) => { setSpeciality(newValue) }} style={{ color: "#FFFFFF" }}
                                        renderInput={(params) => <TextField {...params} sx={{ bgcolor: '#ffffff' }} label="Speciality" margin="normal" variant="filled" color="warning" focused />}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={citys}
                                        value={city}
                                        onChange={(event, newValue) => { setCity(newValue) }} style={{ color: "#FFFFFF" }}
                                        sx={{ width: 'auto' }}
                                        renderInput={(params) => <TextField {...params} sx={{ bgcolor: '#ffffff' }} label="City" margin="normal" variant="filled" color="warning" focused />}
                                    />
                                </Grid>
                                {(notValid) ? (
                                    <Grid item xs={12} >
                                        <Typography color="red" variant='caption' > Choix invalid !</Typography>
                                    </Grid>
                                ) : ('')}
                                <Grid item xs={12} >
                                    <Button style={{
                                        backgroundColor: "#fd7e14",
                                        color: '#030f27',

                                    }}
                                        onClick={e => handelSearch(e)}>
                                        Search</Button>
                                </Grid>
                                

                            </Grid>
                        </Box >
                    </div>
                    <div class="row ">

                        <ProviderCard firstName="aaa" lastName="aafff" />



                        <ProviderCard firstName="ssss" lastName="fghj" />



                        <ProviderCard firstName="qsdfg" lastName="fghjkjn" />



                        <ProviderCard firstName="qftry" lastName="aaf45dgdsvff" />

                    </div>
                    {/* <div class="row">
                        <div class="col-12">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
