import { CssBaseline, Grid } from '@mui/material'
import moment from 'moment';
import React from 'react'
import * as yup from "yup";
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom'
import Avatar from '../../assets/img/avatar.png'



const idp = JSON.parse(localStorage.getItem('idp'))

export default function EditProfileProvider() {

    const [formData, setformData] = React.useState()
    const [passData, setPassData] = React.useState()

    const [isLoading, setLoading] = React.useState(true);
    const [minDate, setMinDate] = React.useState(moment(new Date()))
    const [specialitys, setSpecialitys] = React.useState();
    const [citys, setCitys] = React.useState();
    const [provider, setProvider] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        street: "",
        phone: "",
        city: {
            idSpeciality: 1
        },
        speciality: {
            idSpeciality: 1
        },
        birthday: moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")
    });


    async function signup() {
        try {
            const response = await axios.put('http://localhost:8088/provider/editProvider/' + idp.id, formData);
            console.log(response);
            <Navigate to='/providerProfile' />
        } catch (error) {
            console.error(error);
        }
    }

    async function changePass() {
        try {
            const response = await axios.put('http://localhost:8088/provider/editPassword/' + idp.id, passData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {

        async function getCity() {
            try {
                const response = await axios.get('http://localhost:8088/city/getAllCity');
                console.log(response);
                setCitys(response.data);
                // const res = await axios.get('http://localhost:8088/provider/getClient/'+idp.id);
                // console.log(res);
                // setProvideer(res.data);
                // console.log("provider", provider);

                console.log("ccccc", citys);
            } catch (error) {
                console.error(error);
            }
        }
        async function getSpeciality() {
            try {
                const response = await axios.get('http://localhost:8088/speciality/getAllSpeciality');
                console.log(response);
                setSpecialitys(response.data);



                console.log("spec", specialitys);

            } catch (error) {
                console.error(error);
            }
            axios.get('http://localhost:8088/provider/getProvider/' + idp.id)
                .then(res => {
                    console.log(res);
                    setProvider(res.data);
                    setLoading(false);
                    console.log("provider", provider);
                })
                .catch(err => {
                    console.log("eeeeeee", err)
                })
        }


        getSpeciality();
        getCity();
        console.log("sdf", moment(minDate).subtract(2, 'days').format("YYYY-MM-DD"))
    }, [isLoading]);


    const minnDate = moment(new Date()).subtract(18, 'years')._d
    // console.log("minnDate", minnDate)

    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Enter a valid email").required("Email is required"),
        street: yup.string().required("street is required"),
        phone: yup.number()
            .typeError(' phone est invalide')
            .required('phone is required')
            .max(99999999, 'Saisir 8 chiffres')
            .min(10000000, 'Saisir 8 chiffres'),
        opassword: yup.string()
            .required('password is required'),
        npassword: yup.string()
            .required('password is required')
            .min(8, 'il faut plus que 8 caractére'),
        cpassword: yup.string()
            .required('password is required')
            .oneOf([yup.ref('npassword'), null], 'mote de passe incorrecte'),
        birthday: yup.date()
            .max(minnDate, "Il faut avoir 18 ans minimum")
            .required('Obligatoire'),

    })




    // })
    const FormikPass = useFormik({
        initialValues: {
            opassword: "",
            npassword: "",
            cpassword: "",
        },
        onSubmit: (values) => {
            console.log("subbbb", values)
            setPassData({
                opassword: values.opassword,
                npassword: values.npassword,
                cpassword: values.cpassword
            })
            changePass();
        },
        validationSchema: validationSchema,
        enableReinitialize: true



    })
    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={Avatar} /><span class="font-weight-bold">{provider.firstName} {provider.lastName}</span><span class="text-black-50">{provider.email}</span><span> </span></div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row ">
                            <Grid container>
                                <Grid item>
                                    <Formik
                                        initialValues={{
                                            firstName: provider.firstName,
                                            lastName: provider.lastName,
                                            email: provider.email,
                                            street: provider.street,
                                            phone: provider.phone,
                                            city: provider.city.idCity,
                                            speciality: provider.speciality.idSpeciality,
                                            birthday: moment(provider.birthday).format("YYYY-MM-DD")
                                        }}

                                        onSubmit={async (values) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            setformData({
                                                email: values.email,
                                                passowrd: values.password,
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
                                            axios.put('http://localhost:8088/provider/editProvider/' + idp.id, {
                                                email: values.email,
                                                passowrd: values.password,
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
                                                    window.location.replace("/providerProfile")
                                                    // <Navigate to='/providerProfile' />
                                                })
                                                .catch(error => {
                                                    console.error(error);
                                                })
                                            // signup();
                                        }}

                                    >
                                        {props => (


                                            <form onSubmit={props.handleSubmit} >                                        <Grid container justifyContent="center" spacing={2}>
                                                <Grid item xs={12} sm={6} justifyContent="center">
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

                                                        >
                                                            {citys.map(items =>
                                                                <MenuItem key={items.idCity} value={items.idCity}>{items.label}</MenuItem>
                                                            )}

                                                        </Select>
                                                    </FormControl>
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
                                                    // fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}

                                                >
                                                    Save Profile
                                                </Button>


                                            </form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>

                        </div>
                        {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit Password</span></div>
                        <Formik
                            initialValues={{
                                firstName: provider.firstName,
                                lastName: provider.lastName,
                                email: provider.email,
                                street: provider.street,
                                phone: provider.phone,
                                city: provider.city.idCity,
                                speciality: provider.speciality.idSpeciality,
                                birthday: moment(provider.birthday).format("YYYY-MM-DD")
                            }}

                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                setformData({
                                    email: values.email,
                                    passowrd: values.password,
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
                                signup();
                            }}
                        >
                            {props => (
                                <form onSubmit={props.handleSubmit} >                            <CssBaseline />
                                    <Grid spacing={4} container>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                name="opassword"
                                                label="Old Password"
                                                type="password"
                                                id="opassword"
                                                autoComplete="new-password"
                                                value={props.values.opassword}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.password && Boolean(props.errors.password)}
                                                helperText={props.touched.password && props.errors.password}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                name="npassword"
                                                label="New Password"
                                                type="password"
                                                id="npassword"
                                                autoComplete="new-password"
                                                value={props.values.npassword}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.npassword && Boolean(props.errors.npassword)}
                                                helperText={props.touched.npassword && props.errors.npassword}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                name="cpassword"
                                                label="Confirme Password"
                                                type="password"
                                                id="cpassword"
                                                autoComplete="new-cpassword"
                                                value={props.values.cpassword}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                                error={props.touched.cpassword && Boolean(props.errors.cpassword)}
                                                helperText={props.touched.cpassword && props.errors.cpassword}
                                            />
                                        </Grid>
                                        <Button
                                            type="submit"
                                            // fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Change Password
                                        </Button>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}
