import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bag from '../assets/img/bag.svg'
import bell from '../assets/img/bell.svg'



export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: '100px',
                        padding: '50px'
                    }}>
                        <Typography variant='h4'>welcome to PROVIDERZ</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Link to="/signUpClient">
                        <Box sx={{
                            border: '1px grey',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: '100px'
                        }}>

                            <Card sx={{ maxWidth: 345, padding: 2 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={bell}
                                        alt="Demande Service"
                                    />
                                    <CardContent justifyContent='center'>
                                        <Typography variant='h5'>I need a service</Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>                        </Box>
                    </Link>

                </Grid>
                <Grid item xs={12} md={2}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: '100px'
                    }}>
                        <Typography variant='h3'>OR</Typography>
                    </Box>
                </Grid>

                <Grid item md={5} xs={12} >
                    <Link to="/signUpProvider">
                        <Box sx={{
                            border: '1px grey',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: '100px'
                        }}>
                            <Card sx={{ maxWidth: 345, padding: 2 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={bag}
                                        alt="provider"
                                    />
                                    <CardContent justifyContent='center'>
                                        <Typography variant='h5'>Become a Provider</Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} >
                    <Typography> Already have an account?</Typography>
                </Grid>


            </Grid>

        </Box>
    );
}