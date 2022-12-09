import { CircularProgress } from '@mui/material';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProviderPresenting(props) {

    const [isLoading, setLoading] = useState(true);
    const [provider, setProvider] = useState();
    const location = useLocation();
    const p = location.state;
    console.log(p.id);
    useEffect(() => {
        async function getProvider() {
            try {

                const res = await axios.get('http://localhost:8088/provider/getProvider/'+ p.id);
                console.log(res);
                setProvider(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }


        getProvider();
    }, [isLoading]);


    if (isLoading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 class="f-w-600">{provider.firstName} {provider.lastName}</h6>
                                            <p>{provider.speciality.label}</p>
                                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{provider.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{provider.phone}</h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Loaction</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">City</p>
                                                    <h6 class="text-muted f-w-400">{provider.city.label}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Street</p>
                                                    <h6 class="text-muted f-w-400">{provider.street}</h6>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        xcv
                    </div>
                </div>
            </div>
        </div>
    )
}
