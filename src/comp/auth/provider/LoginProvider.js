import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as yup from "yup";
import axios from 'axios';


const theme = createTheme();

export default function LoginProvider() {

  const [formData, setformData] = React.useState()
  const [l, setL] = React.useState(false)


  function auth() {
    axios.post('http://localhost:8088/provider/auth', formData)
      .then(res => {
        console.log(res);
        localStorage.setItem('idp', JSON.stringify({ "id": res.data.id }))
        window.location.replace("/")
      })

      .catch(error => {
        console.error(error)
        if (error.response.status == 400) {
          // auth()
          setL(true)
        }
      }
      )

  }


  const validationSchema = yup.object({

    email: yup.string()
      .required('Obligatoire')
      .email('Invalid email'),
    password: yup.string()
      .required('Obligatoire')

  })
  // console.log("f",formData)

  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log("f", formData)
              setL(false)
              setformData({
                email: values.email,
                password: values.password
              });
              axios.post('http://localhost:8088/provider/auth', {
                email: values.email,
                password: values.password
              })
                .then(res => {
                  console.log(res);
                  localStorage.setItem('idp', JSON.stringify({ "id": res.data.id }))
                  window.location.replace("/")
                })

                .catch(error => {
                  console.error(error)
                  if (error.response.status == 400) {
                    // auth()
                    setL(true)
                  }
                }
                )
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit} >
                <TextField
                  margin="normal"
                  required
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
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={props.values.password}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  error={props.touched.password && Boolean(props.errors.password)}
                  helperText={props.touched.password && props.errors.password}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  onClick={setL(true)}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>

                  <Grid item>
                    <Link to="/signupClient">
                      {"Don't have an account?    Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
