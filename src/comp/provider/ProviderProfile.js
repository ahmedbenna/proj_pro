import React from 'react'
import { useEffect, useState } from 'react'
import { CircularProgress, Button } from '@mui/material';
import axios from 'axios';
import ClientContractsList from '../../pages/ClientContractsList';
import { Link } from 'react-router-dom';
import ProviderContractsList from './ProviderContractList';
import AddJob from './AddJob';
import JobListe from './JobListe';


const idp = JSON.parse(localStorage.getItem('idp'))


export default function ProviderProfile() {
    const [loading, setLoading] = useState(true);
    const [provider, setProvideer] = useState();


    useEffect(() => {
        async function getProvider() {
            try {
                const response = await axios.get('http://localhost:8088/provider/getProvider/' + idp.id);
                console.log(response);
                setProvideer(response.data);
                console.log("ccccc", provider);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getProvider()
    }, [loading])
    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (

        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                {provider.firstName} {provider.lastName}
                            </h5>
                            <h6>
                                {provider.speciality.label}
                            </h6>
                            <Link to='/EditProfileClient'>
                                <Button >Edit Profile </Button>
                            </Link>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Contracts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="job-tab" data-toggle="tab" href="#job" role="tab" aria-controls="profile" aria-selected="false">Job</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div> */}
                </div>
                <div class="row">
                    {/* <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br />
                            <a href="">Bootsnipp Profile</a><br />
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br />
                            <a href="">Web Developer</a><br />
                            <a href="">WordPress</a><br />
                            <a href="">WooCommerce</a><br />
                            <a href="">PHP, .Net</a><br />
                        </div>
                    </div> */}
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{provider.firstName} </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Last Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{provider.lastName}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{provider.email}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{provider.phone}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Birthday</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{provider.birthday}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                <ProviderContractsList />
                            </div>
                            <div class="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                                <AddJob />
                                <JobListe/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
