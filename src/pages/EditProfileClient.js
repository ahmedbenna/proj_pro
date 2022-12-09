import { CssBaseline, Grid } from '@mui/material'
import moment from 'moment';
import React from 'react'
import * as yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function EditProfileClient() {

    const [formData, setformData] = React.useState()
    const [isLoading, setLoading] = React.useState(true);
    const [minDate, setMinDate] = React.useState(moment(new Date()))

    const [citys, setCitys] = React.useState();
    const [client, setClient] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        street: "",
        phone: "",
        city: 2,
        birthday: moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")
    });


    async function signup() {
        try {
            const response = await axios.post('http://localhost:8088/client/editClient/1', formData);
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
                const res = await axios.get('http://localhost:8088/client/getClient/1');
                console.log(res);
                setClient(res.data);
                console.log("client", client);

                console.log("ccccc", citys);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

      
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
        password: yup.string()
            .required('password is required')
            .min(8, 'il faut plus que 8 caractére'),
        cPassword: yup.string()
            .required('password is required')
            .oneOf([yup.ref('password'), null], 'mote de passe incorrecte'),
        birthday: yup.date()
            .max(minnDate, "Il faut avoir 18 ans minimum")
            .required('Obligatoire'),

    })
    const Formik = useFormik({
        initialValues: {
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            password: "",
            street: client.street,
            phone: client.phone,
            city: client.city.idCity,
            birthday: moment(client.birthday).format("YYYY-MM-DD")
        },
        onSubmit: (values) => {
            console.log("subbbb", values)
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
                }
            })
            signup();
        },
        validationSchema: validationSchema,
        enableReinitialize: true



    })
    const FormikPass = useFormik({
        initialValues: {
            password: "",
            cpassword: "",
        },
        onSubmit: (values) => {
            console.log("subbbb", values)
            setformData({
               
                passowrd: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
                street: values.street,
                birthday: values.birthday,
                city:
                {
                    idCity: values.city
                }
            })
            signup();
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
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{client.firstName} {client.lastName}</span><span class="text-black-50">{client.email}</span><span> </span></div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row ">
                            <Grid container>
                                <Grid item>
                                    <form onSubmit={(e) => { e.preventDefault(); Formik.handleSubmit(e) }} >
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item xs={12} sm={6} justifyContent="center">
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="firstName"

                                                    fullWidth
                                                    id="firstName"
                                                    label="First Name"
                                                    autoFocus
                                                    value={Formik.values.firstName}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.firstName && Boolean(Formik.errors.firstName)}
                                                    helperText={Formik.touched.firstName && Formik.errors.firstName}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField

                                                    fullWidth
                                                    id="lastName"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="family-name"
                                                    value={Formik.values.lastName}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.lastName && Boolean(Formik.errors.lastName)}
                                                    helperText={Formik.touched.lastName && Formik.errors.lastName}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    value={Formik.values.email}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.email && Boolean(Formik.errors.email)}
                                                    helperText={Formik.touched.email && Formik.errors.email}
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
                                                    value={Formik.values.phone}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.phone && Boolean(Formik.errors.phone)}
                                                    helperText={Formik.touched.phone && Formik.errors.phone}
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
                                                    value={Formik.values.street}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.street && Boolean(Formik.errors.street)}
                                                    helperText={Formik.touched.street && Formik.errors.street}
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
                                                        value={Formik.values.city}
                                                        onChange={Formik.handleChange}

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
                                                    value={Formik.values.birthday}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.birthday && Boolean(Formik.errors.birthday)}
                                                    helperText={Formik.touched.birthday && Formik.errors.birthday}
                                                // defaultValue={moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <CssBaseline />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    fullWidth
                                                    name="password"
                                                    label="Confirme Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                    value={Formik.values.password}
                                                    onBlur={Formik.handleBlur}
                                                    onChange={Formik.handleChange}
                                                    error={Formik.touched.password && Boolean(Formik.errors.password)}
                                                    helperText={Formik.touched.password && Formik.errors.password}
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
                                </Grid>
                            </Grid>

                        </div>
                        {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit Password</span></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
