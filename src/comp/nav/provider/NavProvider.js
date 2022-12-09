import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { CircularProgress, Menu, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';



// localStorage.setItem('idp', JSON.stringify({ "id": "1" }))
const idp = JSON.parse(localStorage.getItem('idp'))



export default function NavProvider() {

    const [isLoading, setLoading] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [client, setClient] = React.useState();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        setAnchorEl(null);
        window.location = '/'
        localStorage.removeItem('idp')
        // localStorage.removeItem('token')
    }

    useEffect(() => {
        async function getClient() {
            try {

                const res = await axios.get('http://localhost:8088/provideer/getProvider/'+idp.id);
                console.log(res);
                setClient(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }


        getClient();
    }, [isLoading]);

    
    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <>

            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <Link to="/">
                                    <h1>Providerzz</h1>
                                    {/* <img src="assets/img/logo.jpg" alt="Logo" /> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Opening Hour</h3>
                                            <p>Mon - Fri, 8:00 - 9:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>+012 345 6789</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-send-mail"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Bar End --> */}

            {/* <!-- Nav Bar Start --> */}
            <div className="nav-bar">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <Button
                            onClick={handleMenu}
                        >
                            <AccountCircle /> {client.firstName} {client.lastName}
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link to='clientProfile'>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>

                            </Link>
                            <MenuItem onClick={handleSignOut}>My account</MenuItem>
                        </Menu>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <Link to="/">
                                    <a className="nav-item nav-link active">Home</a>
                                </Link>
                                <Link to="/about">
                                    <a className="nav-item nav-link">About</a>
                                </Link>
                                <Link to="/services">
                                    <a className="nav-item nav-link">Service</a>
                                </Link>
                                <Link to="/team">
                                    <a className="nav-item nav-link">Team</a>
                                </Link>
                                {/* <Link to="/about"> */}
                                <a className="nav-item nav-link">Project</a>
                                {/* </Link> */}
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu">
                                        <Link to="/blog">
                                            <a className="dropdown-item">Blog Page</a>
                                        </Link>
                                        <Link to="/single">
                                            <a className="dropdown-item">Single Page</a>
                                        </Link>
                                    </div>
                                </div>
                                <Link to="/contact">
                                    <a className="nav-item nav-link">Contact</a>
                                </Link>
                            </div>
                            <div className="ml-auto">


                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    );
}