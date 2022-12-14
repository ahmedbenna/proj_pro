import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Await, Link } from 'react-router-dom'
import axios from 'axios';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import moment from 'moment/moment';
import { Formik, useFormik } from 'formik';
import * as yup from "yup";
import GoogleLogin from 'react-google-login';

const theme = createTheme();

export default function SignupProvider() {
    const [formData, setformData] = React.useState()
    const [isLoading, setLoading] = React.useState(true);
    const [citys, setCitys] = React.useState();
    const [minDate, setMinDate] = React.useState(moment(new Date()))
    const minnDate = moment(new Date()).subtract(18, 'years')._d
    const [specialitys, setSpeciality] = React.useState();


    async function signup() {
        try {
            const response = await axios.post('http://localhost:8088/provider/signup', formData);
            console.log(response);
            localStorage.setItem('idp', JSON.stringify({ "id": response.data.id }))
            window.location.replace("/")
        } catch (error) {
            if (error.response.status == 400) {
                signup()
            }
            console.error(error);
        }
    }





    React.useEffect(() => {

        async function getCity() {
            try {
                const response = await axios.get('http://localhost:8088/city/getAllCity');
                // console.log(response);
                setCitys(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        async function getSpeciality() {
            axios
                .get("http://localhost:8088/speciality/getAllSpeciality")
                .then(data => {
                    setSpeciality(data.data)
                })
                .catch(err => {
                    console.log(err);
                    return null;
                });
        };




        getSpeciality();
        getCity();
    }, [isLoading]);



    const validationSchema = yup.object({
        nom: yup.string()
            .required('Obligatoire'),
        prenom: yup.string()
            .required('Obligatoire'),
        email: yup.string()
            .required('Obligatoire')
            .email('Invalid email'),
        password: yup.string()
            .required('Obligatoire')
            .min(8, 'il faut plus que 8 caractére'),
        cPassword: yup.string()
            .required('Obligatoire')
            .oneOf([yup.ref('password'), null], 'mote de passe incorrecte'),
        phone: yup.number()
            .typeError(' Numero est invalide')
            .required('Obligatoire')
            .max(99999999, 'Numero invalide')
            .min(10000000, 'Numero invalide'),
        street: yup.string()
            .required('Obligatoire'),
        // presentation: yup.string()
        //     .required('Obligatoire'),
        birthday: yup.date()
            .max(minnDate, "Il faut avoir 18 ans minimum")
            .required('Obligatoire'),


    })
    const responseGoogle = (response) => {
        console.log(response);
    }



    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }

    return (
        // <React.Suspense fallback={}>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                cPassword: "",
                                street: "",
                                phone: "",
                                speciality: 1,
                                city: 1,
                                birthday: moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")
                            }}
                            onSubmit={async (values) => {
                                // await new Promise((r) => setTimeout(r, 500));
                                setformData({
                                    email: values.email,
                                    password: values.password,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    phone: values.phone,
                                    street: values.street,
                                    birthday: values.birthday,
                                    city:
                                    {
                                        idCity: values.city
                                    },
                                    speciality: {
                                        idSpeciality: values.speciality
                                    }

                                });
                                console.log('fffffff', formData)
                                axios.post('http://localhost:8088/provider/signup', {
                                    email: values.email,
                                    password: values.password,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    phone: values.phone,
                                    street: values.street,
                                    birthday: values.birthday,
                                    city:
                                    {
                                        idCity: values.city
                                    },
                                    speciality: {
                                        idSpeciality: values.speciality
                                    }

                                })
                                    .then(response => {
                                        console.log(response);
                                        localStorage.setItem('idp', JSON.stringify({ "id": response.data.id }))
                                        window.location.replace("/")
                                    })
                                    .catch(error => {
                                        console.error(error);
                                    })



                            }}
                        >
                            {props => (


                                <form onSubmit={props.handleSubmit} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"

                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                value={props.values.firstName}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.firstName && Boolean(props.errors.firstName)}
                                                helperText={props.touched.firstName && props.errors.firstName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField

                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                                value={props.values.lastName}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.lastName && Boolean(props.errors.lastName)}
                                                helperText={props.touched.lastName && props.errors.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={props.values.email}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.email && Boolean(props.errors.email)}
                                                helperText={props.touched.email && props.errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                value={props.values.password}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.password && Boolean(props.errors.password)}
                                                helperText={props.touched.password && props.errors.password}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                fullWidth
                                                name="cPassword"
                                                label="cPassword"
                                                type="password"
                                                id="cPassword"
                                                autoComplete="new-cPassword"
                                                value={props.values.cPassword}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.cPassword && Boolean(props.errors.cPassword)}
                                                helperText={props.touched.cPassword && props.errors.cPassword}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="speciality"
                                                    name="speciality"
                                                    value={props.values.speciality}
                                                    onChange={props.handleChange}
                                                // id="speciality"

                                                // onChange={handleChange}
                                                >
                                                    {specialitys.map(items =>
                                                        <MenuItem key={items.idSpeciality} value={items.idSpeciality}>{items.label}</MenuItem>
                                                    )}

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                fullWidth
                                                name="phone"
                                                label="phone"
                                                type="text"
                                                id="phone"
                                                autoComplete="phone"
                                                value={props.values.phone}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.phone && Boolean(props.errors.phone)}
                                                helperText={props.touched.phone && props.errors.phone}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                fullWidth
                                                name="street"
                                                label="street"
                                                type="text"
                                                id="street"
                                                autoComplete="street"
                                                value={props.values.street}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.street && Boolean(props.errors.street)}
                                                helperText={props.touched.street && props.errors.street}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">city</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="city"
                                                    name="city"
                                                    value={props.values.city}
                                                    onChange={props.handleChange}
                                                // id="city"

                                                // onChange={handleChange}
                                                >
                                                    {citys.map(items =>
                                                        <MenuItem key={items.idCity} value={items.idCity}>{items.label}</MenuItem>
                                                    )}

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="date"
                                                name="birthday"
                                                label="birthday"
                                                type="date"
                                                value={props.values.birthday}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.birthday && Boolean(props.errors.birthday)}
                                                helperText={props.touched.birthday && props.errors.birthday}
                                            // defaultValue={moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign Up
                                    </Button>
                                    {/* <GoogleLogin
                                        clientId="109524746643-mf2lf4u0s5a8vbtdl8d2ffbp41aa9b19.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    /> */}
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link to="/loginProvider">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        // </React.Suspense>
    );
}