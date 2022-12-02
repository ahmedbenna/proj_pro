import { Autocomplete, Button, CircularProgress, Grid, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';

// type Cit = {
//     idCity: number,
//     label: string
// }

// type Sp = {
//     idSpeciality: number,
//     label: string
// }
export default function SearchBox() {

    const [specialitys, setSpecialitys] = useState();
    const [citys, setCitys] = useState();



    const [speciality, setSpeciality] = useState(null);
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notValid, setNotValid ] =useState(false);
    console.log("auto sp", speciality)

    
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
    }, []);

    

    function handelSearch() {
    //     if (city != null && speciality != null) {
    //         try {
    //             const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
    //             console.log(response);
    //             setSpecialitys(response.data);
    //             console.log("ccccc", specialitys);
    //             // setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }else if ((city != null && speciality == null))
    //     {
    //         try {
    //             const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
    //             console.log(response);
    //             setSpecialitys(response.data);
    //             console.log("ccccc", specialitys);
    //             // setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }else if ((city == null && speciality != null)) {
    //         try {
    //             const response =  axios.get('http://localhost:8088/speciality/getAllSpeciality');
    //             console.log(response);
    //             setSpecialitys(response.data);
    //             console.log("ccccc", specialitys);
    //             // setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }else {
    //         setNotValid(true)
    //     }
    
    }
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
                            onChange={(event: any, newValue: string | null) => { setSpeciality(newValue) }} style={{ color: "#FFFFFF" }}
                            renderInput={(params) => <TextField {...params} sx={{ bgcolor: '#ffffff' }} label="Speciality" margin="normal" variant="filled" color="warning" focused />}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={citys}
                            value={city}
                            onChange={(event: any, newValue: string | null) => { setCity(newValue) }} style={{ color: "#FFFFFF" }}
                            sx={{ width: 'auto' }}
                            renderInput={(params) => <TextField {...params} sx={{ bgcolor: '#ffffff' }} label="City" margin="normal" variant="filled" color="warning" focused />}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button style={{
                            backgroundColor: "#fd7e14",
                            color: '#030f27',

                        }}
                            onClick={handelSearch()}>
                            Search</Button>
                    </Grid>
                    {(notValid)?(
                        <Grid item xs={12} >
                        <Button style={{
                            backgroundColor: "#fd7e14",
                            color: '#030f27',

                        }}
                            onClick={handelSearch()}>
                            Search</Button>
                    </Grid>
                    ):('')}
                    
                </Grid>
            </Box >
        )
    }
}
