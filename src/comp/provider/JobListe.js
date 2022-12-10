import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import EditJob from './EditJob';
import DeleteJob from './DeleteJob';


const idp = JSON.parse(localStorage.getItem('idp'))

export default function JobListe() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        function getJob() {
            setLoading(true);

            axios.get('http://localhost:8088/job/' + idp.id + '/getAllJob')
                .then((response) => {
                    setJobs(response.data)
                    console.log(response);

                    setLoading(false);
                })

                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                })
        }

        getJob()
    }, [])

    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div class="row mt-3 bodyyyy">
            {(jobs != null) ? (
                jobs.map(jo =>
                    <div class="col-lg-3 col-md-6 bodyyyy " style={{ marginTop: '50px' }}>
                        <div class="carddd d-flex align-items-center justify-content-center">
                            <div class="ribon">
                                <span class="material-icons">
                                    rocket
                                </span>
                            </div>
                            <ul class="mb-12 list-unstyled text-muted">
                                <p class="h-1 pt-5">{jo.title}</p>
                                <li>
                                    {jo.description}
                                </li>
                                <EditJob job={jo}/>
                                <DeleteJob job={jo}/>
                            </ul>
                            
                        </div>
                    </div>
                )
            ) : (<h1>Add Job</h1>)}

          
        </div>
    )
}
