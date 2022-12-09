import React from 'react'
import SearchBox from '../comp/Home/SearchBox';
import ProviderCard from '../comp/provider/ProviderCard';
import axios from 'axios';
import { useState } from 'react';
import { Box, Button, CircularProgress, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// async function getProviderByCity() {
//     try {
//         const response = await axios.post('http://localhost:8088/client/signup');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getProviderByspeciality() {
//     try {
//         const response = await axios.post('http://localhost:8088/client/signup');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

export default function SearchResult() {

    const [specialitys, setSpecialitys] = useState();
    const [citys, setCitys] = useState();



    const [speciality, setSpeciality] = useState(null);
    const [city, setCity] = useState(null);

    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loadingRES, setLoadingRES] = useState(true);

    const [notValid, setNotValid] = useState(false);

    const [result, setResult] = useState(null);

    const handelSearch = (e) => {
        console.log("auto sp", speciality)
        console.log("auto ci", city)
        if (city != null && speciality != null) {
            setNotValid(false)

            axios.get('http://localhost:8088/provider/speciality/' + speciality + '/city/' + city + '/getProvider')
                .then((response) => {
                    setResult(response.data);
                    setLoading2(false);
                    setLoading1(false);
                    console.log("3333333333333", result);
                })
                .catch((error) => {
                    console.error(error);
                })
        } else if ((city != null && speciality == null)) {
            setNotValid(false)
            try {
                const response = axios.get('http://localhost:8088/speciality/getAllSpeciality');
                console.log(response);
                setResult(response.data);
                setLoading2(false);
                setLoading1(false);
                console.log("ccccc", result);
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        } else if ((city == null && speciality != null)) {
            setNotValid(false)
            try {
                const response = axios.get('http://localhost:8088/speciality/getAllSpeciality');
                console.log(response);
                setResult(response.data);
                setLoading2(false);
                setLoading1(false);
                console.log("ccccc", result);
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        } else {
            setNotValid(true)
        }

    }
    useEffect(() => {

        async function getSpeciality() {
            try {
                const response = await axios.get('http://localhost:8088/speciality/getAllSpeciality');
                if (response.status == 200) {
                    setSpecialitys(response.data);
                    console.log("ccccc", specialitys);
                    setLoading2(false);
                }

            } catch (error) {
                console.error(error);
            }
        }

        async function getCity() {
            try {
                const response = await axios.get('http://localhost:8088/city/getAllCity');
                console.log(response);
                if (response.status == 200) {

                    setCitys(response.data);
                    console.log("ccccc", citys);
                    setLoading1(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getCity();
        getSpeciality();
        console.log("city", specialitys)
    }, [loading1]);



    if (loading1 == true && loading2 == true) {
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
    } else if (loading1 == false && loading2 == false) {
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
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        backgroundColor="#ffffff"
                                    >
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={city}
                                            label="City"
                                            onChange={(e) => { setCity(e.target.value) }}
                                            // style={{ color: "#FFFFFF" }}
                                            // sx={{ backgroundColor: '#ffffff' }}
                                            fullWidth
                                            color="warning"

                                            variant="filled"
                                            focused
                                            disablePortal
                                        >
                                            {citys.map(cit =>
                                                <MenuItem key={cit.idCity} value={cit.idCity}> {cit.label} </MenuItem >
                                            )}
                                        </Select>
                                    </Box>


                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        backgroundColor="#ffffff"
                                    >
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={speciality}
                                            label="Specilaity"
                                            onChange={(e) => { setSpeciality(e.target.value) }}

                                            fullWidth
                                            color="warning"

                                            variant="filled"
                                            focused
                                            disablePortal
                                        >
                                            {specialitys.map(spec =>
                                                <MenuItem value={spec.idSpeciality} key={spec.idSpeciality}> {spec.label} </MenuItem >
                                            )}
                                        </Select>
                                    </Box>
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
                        {(result) != null ? (

                            result.map(r =>
                                <Link state={{id :r.id}} to='/ProviderPresenting'>
                                    <ProviderCard firstName={r.firstName} lastName={r.lastName} />
                                </Link>
                            )

                        ) : ('')}
                        {/* 
                        <ProviderCard firstName="aaa" lastName="aafff" />



                        <ProviderCard firstName="ssss" lastName="fghj" />



                        <ProviderCard firstName="qsdfg" lastName="fghjkjn" />



                        <ProviderCard firstName="qftry" lastName="aaf45dgdsvff" /> */}

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
