// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Await, Link } from 'react-router-dom'
// import axios from 'axios';
// import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import moment from 'moment/moment';
// import { Formik, useFormik } from 'formik';
// import * as yup from "yup";
// import GoogleLogin from 'react-google-login';

// const theme = createTheme();

// export default function SignupProvider() {
//     const [formData, setformData] = React.useState()
//     const [isLoading, setLoading] = React.useState(true);
//     const [citys, setCitys] = React.useState();
//     const [minDate, setMinDate] = React.useState(moment(new Date()))
//     const minnDate = moment(new Date()).subtract(18, 'years')._d
//     const [specialitys, setSpeciality] = React.useState();


//     async function signup() {
//         try {
//             const response = await axios.post('http://localhost:8088/provider/signup', formData);
//             console.log(response);
//         } catch (error) {
//             console.error(error);
//         }
//     }





//     React.useEffect(() => {

//         async function getCity() {
//             try {
//                 const response = await axios.get('http://localhost:8088/city/getAllCity');
//                 // console.log(response);
//                 setCitys(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error(error);
//             }
//         }

//         async function getSpeciality() {
//             axios
//                 .get("http://localhost:8088/speciality/getAllSpeciality")
//                 .then(data => {
//                     setSpeciality(data.data)
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     return null;
//                 });
//         };




//         getSpeciality();
//         getCity();
//     }, [isLoading]);



//     const validationSchema = yup.object({
//         nom: yup.string()
//             .required('Obligatoire'),
//         prenom: yup.string()
//             .required('Obligatoire'),
//         email: yup.string()
//             .required('Obligatoire')
//             .email('Invalid email'),
//         password: yup.string()
//             .required('Obligatoire')
//             .min(8, 'il faut plus que 8 caractére'),
//         cPassword: yup.string()
//             .required('Obligatoire')
//             .oneOf([yup.ref('password'), null], 'mote de passe incorrecte'),
//         phone: yup.number()
//             .typeError(' Numero est invalide')
//             .required('Obligatoire')
//             .max(99999999, 'Numero invalide')
//             .min(10000000, 'Numero invalide'),
//         street: yup.string()
//             .required('Obligatoire'),
//         // presentation: yup.string()
//         //     .required('Obligatoire'),
//         birthday: yup.date()
//             .max(minnDate, "Il faut avoir 18 ans minimum")
//             .required('Obligatoire'),


//     })
//     // const formik = useFormik({
//     //     initialValues: {
//     //         firstName: "",
//     //         lastName: "",
//     //         email: "",
//     //         password: "",
//     //         cPassword: "",
//     //         street: "",
//     //         phone: "",
//     //         speciality: 1,
//     //         city: 1,
//     //         birthday: moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")
//     //     },
//     //     onSubmit: (values) => {
//     //         console.log("subbbb", values)
//     //         setformData({
//     //             email: values.email,
//     //             passowrd: values.password,
//     //             firstName: values.firstName,
//     //             lastName: values.lastName,
//     //             phone: values.phone,
//     //             street: values.street,
//     //             city:
//     //             {
//     //                 idCity: values.city
//     //             },
//     //             speciality: {
//     //                 idSpeciality: values.speciality
//     //             }

//     //         });
//     //         signup();
//     //     },
//     //     validationSchema: validationSchema



//     // })
//     const responseGoogle = (response) => {
//         console.log(response);
//     }

//     // const handleSubmit = (event) => {
//     //   event.preventDefault();
//     //   const data = new FormData(event.currentTarget);
//     //   setformData({
//     //     email: data.get('email'),
//     //     passowrd: data.get('password'),
//     //     firstName: data.get('firstName'),
//     //     lastName: data.get('lastName'),
//     //     phone: data.get('phone'),
//     //     street: data.get('street'),
//     //     city:
//     //     {
//     //       idCity: data.get('city')
//     //     }
//     //   })
//     //   console.log(
//     //     formData
//     //   );
//     //   signup();
//     // };

//     // React.useEffect(() => {
//     //   axios.get('http://localhost:8088/city/getAllCity').then(response => {
//     //     // setCitys(response.data)
//     //     console.log(response.data);
//     //     setLoading(false);
//     //   });
//     // }, []);

//     if (isLoading) {

//         return <div className="App"><CircularProgress /></div>;
//     }

//     return (
//         // <React.Suspense fallback={}>
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar> */}
//                     <Typography component="h1" variant="h5">
//                         Sign up
//                     </Typography>
//                     <Box sx={{ mt: 3 }}>
//                         <Formik
//                             initialValues={{
//                                 firstName: "",
//                                 lastName: "",
//                                 email: "",
//                                 password: "",
//                                 cPassword: "",
//                                 street: "",
//                                 phone: "",
//                                 speciality: 1,
//                                 city: 1,
//                                 birthday: moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")
//                             }}
//                             onSubmit={async (values) => {
//                                 await new Promise((r) => setTimeout(r, 500));
//                                 setformData({
//                                     email: values.email,
//                                     passowrd: values.password,
//                                     firstName: values.firstName,
//                                     lastName: values.lastName,
//                                     phone: values.phone,
//                                     street: values.street,
//                                     city:
//                                     {
//                                         idCity: values.city
//                                     },
//                                     speciality: {
//                                         idSpeciality: values.speciality
//                                     }
                    
//                                 });
//                                 signup();
//                             }}
//                         >
//                             <form onSubmit={formik.handleSubmit} >
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             autoComplete="given-name"
//                                             name="firstName"

//                                             fullWidth
//                                             id="firstName"
//                                             label="First Name"
//                                             autoFocus
//                                             value={formik.values.firstName}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                                             helperText={formik.touched.firstName && formik.errors.firstName}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField

//                                             fullWidth
//                                             id="lastName"
//                                             label="Last Name"
//                                             name="lastName"
//                                             autoComplete="family-name"
//                                             value={formik.values.lastName}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                                             helperText={formik.touched.lastName && formik.errors.lastName}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             fullWidth
//                                             id="email"
//                                             label="Email Address"
//                                             name="email"
//                                             autoComplete="email"
//                                             value={formik.values.email}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.email && Boolean(formik.errors.email)}
//                                             helperText={formik.touched.email && formik.errors.email}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             fullWidth
//                                             name="password"
//                                             label="Password"
//                                             type="password"
//                                             id="password"
//                                             autoComplete="new-password"
//                                             value={formik.values.password}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.password && Boolean(formik.errors.password)}
//                                             helperText={formik.touched.password && formik.errors.password}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             fullWidth
//                                             name="cPassword"
//                                             label="cPassword"
//                                             type="password"
//                                             id="cPassword"
//                                             autoComplete="new-cPassword"
//                                             value={formik.values.cPassword}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.cPassword && Boolean(formik.errors.cPassword)}
//                                             helperText={formik.touched.cPassword && formik.errors.cPassword}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <FormControl fullWidth>
//                                             <InputLabel id="demo-simple-select-label">city</InputLabel>
//                                             <Select
//                                                 labelId="demo-simple-select-label"
//                                                 id="demo-simple-select"
//                                                 label="speciality"
//                                                 name="speciality"
//                                                 value={formik.values.speciality}
//                                                 onChange={formik.handleChange}
//                                             // id="speciality"

//                                             // onChange={handleChange}
//                                             >
//                                                 {specialitys.map(items =>
//                                                     <MenuItem key={items.idSpeciality} value={items.idSpeciality}>{items.label}</MenuItem>
//                                                 )}

//                                             </Select>
//                                         </FormControl>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             fullWidth
//                                             name="phone"
//                                             label="phone"
//                                             type="text"
//                                             id="phone"
//                                             autoComplete="phone"
//                                             value={formik.values.phone}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.phone && Boolean(formik.errors.phone)}
//                                             helperText={formik.touched.phone && formik.errors.phone}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             fullWidth
//                                             name="street"
//                                             label="street"
//                                             type="text"
//                                             id="street"
//                                             autoComplete="street"
//                                             value={formik.values.street}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.street && Boolean(formik.errors.street)}
//                                             helperText={formik.touched.street && formik.errors.street}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <FormControl fullWidth>
//                                             <InputLabel id="demo-simple-select-label">city</InputLabel>
//                                             <Select
//                                                 labelId="demo-simple-select-label"
//                                                 id="demo-simple-select"
//                                                 label="city"
//                                                 name="city"
//                                                 value={formik.values.city}
//                                                 onChange={formik.handleChange}
//                                             // id="city"

//                                             // onChange={handleChange}
//                                             >
//                                                 {citys.map(items =>
//                                                     <MenuItem key={items.idCity} value={items.idCity}>{items.label}</MenuItem>
//                                                 )}

//                                             </Select>
//                                         </FormControl>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             fullWidth
//                                             id="date"
//                                             name="birthday"
//                                             label="birthday"
//                                             type="date"
//                                             value={formik.values.birthday}
//                                             onBlur={formik.handleBlur}
//                                             onChange={formik.handleChange}
//                                             error={formik.touched.birthday && Boolean(formik.errors.birthday)}
//                                             helperText={formik.touched.birthday && formik.errors.birthday}
//                                         // defaultValue={moment(minDate).subtract(18, 'years').format("YYYY-MM-DD")}
//                                         />
//                                     </Grid>
//                                 </Grid>
//                                 <Button
//                                     type="submit"
//                                     fullWidth
//                                     variant="contained"
//                                     sx={{ mt: 3, mb: 2 }}
//                                 >
//                                     Sign Up
//                                 </Button>
//                                 <GoogleLogin
//                                     clientId="109524746643-mf2lf4u0s5a8vbtdl8d2ffbp41aa9b19.apps.googleusercontent.com"
//                                     buttonText="Login"
//                                     onSuccess={responseGoogle}
//                                     onFailure={responseGoogle}
//                                     cookiePolicy={'single_host_origin'}
//                                 />
//                                 <Grid container justifyContent="flex-end">
//                                     <Grid item>
//                                         <Link to="/loginProvider">
//                                             Already have an account? Sign in
//                                         </Link>
//                                     </Grid>
//                                 </Grid>
//                             </form>
//                         </Formik>
//                     </Box>
//                 </Box>
//             </Container>
//         </ThemeProvider>
//         // </React.Suspense>
//     );
// }