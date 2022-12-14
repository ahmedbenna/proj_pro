import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import SelectJob from '../client/SelectJob';

export default function ProviderPresenting(props) {

    const [isLoading, setLoading] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [jobs, setJobs] = useState(null);
    const [provider, setProvider] = useState();
    const location = useLocation();
    const p = location.state;
    // console.log(p.id);
    if (!p) {
        <Navigate to='/searchResult' />
    }
    const [prov, setProv] = useState(p)
    useEffect(() => {
        async function getProvider() {
            try {

                const res = await axios.get('http://localhost:8088/provider/getProvider/' + prov.id);
                console.log(res);
                setProvider(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        function getJob() {

            axios.get('http://localhost:8088/job/' + prov.id + '/getAllJob')
                .then((response) => {
                    setJobs(response.data)
                    console.log(response);

                    setLoading2(false);
                })

                .catch((error) => {
                    console.error(error);
                    setLoading2(false);
                })
        }

        getJob()
        getProvider();
    }, [isLoading]);

    const [rating, setRating] = useState(3)

    const handleRating = (e) => {
        setRating(e.target.value)
        console.log("rating", rating)
    }

    const handleAddRatings = () => {
        // console.log('ratinggggggg',rating)
        axios.put('http://localhost:8088/provider/feedBack/' + prov.id, {
            params: {
                feed: parseInt(rating)
            },
            
        })
            .then((response) => {
                window.location.reload(false)
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
    }


    if (isLoading && isLoading2) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div class='bodyyyy'>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-12 col-md-12">
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
                                            {(provider.description) ? (
                                                <><h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Description</h6>
                                                    <div class="row">

                                                        <div class="col-sm-12">
                                                            {/* <p class="m-b-10 f-w-600">Street</p> */}
                                                            <h6 class="text-muted f-w-400">{provider.description}</h6>
                                                        </div>
                                                    </div></>
                                            ) :
                                                ('')}
                                            {(provider.feed == 0) ? (
                                                <>
                                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Ratings</h6>
                                                    <div class="row">

                                                        <div class="col-md-12">

                                                            <div class="stars">

                                                                <form action="">
                                                                    <h6 class="text-muted f-w-400">Leave a rating!</h6>

                                                                    <input class="star star-5" onChange={handleRating} value={5} id="star-5" type="radio" name="star" />

                                                                    <label class="star star-5" for="star-5"></label>

                                                                    <input class="star star-4" onChange={handleRating} value={4} id="star-4" type="radio" name="star" />

                                                                    <label class="star star-4" for="star-4"></label>

                                                                    <input class="star star-3" onChange={handleRating} value={3} id="star-3" type="radio" name="star" />

                                                                    <label class="star star-3" for="star-3"></label>

                                                                    <input class="star star-2" onChange={handleRating} value={2} id="star-2" type="radio" name="star" />

                                                                    <label class="star star-2" for="star-2"></label>

                                                                    <input class="star star-1" onChange={handleRating} value={1} id="star-1" type="radio" name="star" />

                                                                    <label class="star star-1" for="star-1"></label>
                                                                    <Button onClick={handleAddRatings}>
                                                                        add rating
                                                                    </Button>
                                                                    <h5 class="text-muted f-w-400">{provider.feed}/5</h5>

                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            ) : (
                                                <h5 class="text-muted f-w-400">{provider.feed}/5</h5>
                                            )}

                                            {/* </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container ">
                            <div>
                                <p class="h2 text-center mb-5">
                                    Choose Your Perfect Plans
                                </p>
                            </div>
                            <div class="row mt-3 bodyyyy">
                                {(jobs != null) ? (
                                    jobs.map(jo =>

                                        <SelectJob pr={provider} jo={jo} />
                                    )
                                ) : (<h1>no Jobs</h1>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
