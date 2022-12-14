import { CircularProgress, Divider } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import ContractDetails from '../client/ContractDetails';
import ProviderAcceptedContractMap from './ProviderAcceptedContractMap';
import ProviderContractDetails from './ProviderContractDetails';


const idp = JSON.parse(localStorage.getItem('idp'))

export default function ProviderContractsList() {
    // console.log(idp.id)
    const [isLoading, setLoading] = React.useState(true);
    const [isLoading2, setLoading2] = React.useState(true);
    const [isLoading3, setLoading3] = React.useState(true);
    const [pending, setPending] = React.useState();
    const [accept, setAccept] = React.useState();
    const [reject, setReject] = React.useState();
    const [ape, setApi] = React.useState(true);

    useEffect(() => {

        async function getContract() {
            try {
                const response = await axios.get('http://localhost:8088/contract/provider/' + idp.id + '/getContract/pending');
                console.log(response);
                setPending(response.data);
                console.log("p", pending);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            try {
                const response = await axios.get('http://localhost:8088/contract/provider/' + idp.id + '/getContract/accept');
                console.log(response);
                setAccept(response.data);
                console.log("a", accept);
                setLoading2(false);
            } catch (error) {
                console.error(error);
            }
            try {
                const response = await axios.get('http://localhost:8088/contract/provider/' + idp.id + '/getContract/reject');
                console.log(response);
                setReject(response.data);
                console.log("r", reject);
                setLoading3(false);
            } catch (error) {
                console.error(error);
            }
        }
        setApi(false)
        getContract()
        // setLoading(false);
    }, [isLoading3,isLoading2,isLoading])
    // console.log("eeeeeee",accept)
    if (isLoading && isLoading2 && isLoading3) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>
            {/* <Divider style={{margin:"20px"}}/> */}
            {(pending !=[]) ? (
                <> 
                <div class="col-md-6">
                    <label>Pendings</label>
                </div>
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>Provider</th>
                                <th>Job</th>
                                <th>Responde</th>
                                {/* <th>Position</th>
                        <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {pending.map(cont =>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">

                                            <div class="ms-3">
                                                <p class="fw-bold mb-1">{cont.provider.firstName} {cont.provider.lastName}</p>
                                                <p class="text-muted mb-0">{cont.provider.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">{cont.provider.speciality.label}</p>
                                        <p class="text-muted mb-0">{cont.job.title}</p>
                                    </td>
                                    <td>
                                        <ContractDetails c={cont} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>

            ) :('')}{
            (accept)?(
            
                <> 
                <Divider style={{margin:"20px"}}/>
                <div class="col-md-6">
                    <label>Accepted</label>
                </div>
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>provider</th>
                                <th>job</th>
                                <th>response</th>
                                {/* <th><ProviderAcceptedContractMap c={accept} /></th> */}
                        {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {accept.map(cont =>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">

                                            <div class="ms-3">
                                                <p class="fw-bold mb-1">{cont.provider.firstName} {cont.provider.lastName}</p>
                                                <p class="text-muted mb-0">{cont.provider.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">{cont.provider.speciality.label}</p>
                                        <p class="text-muted mb-0">{cont.job.title}</p>
                                    </td>
                                    <td>
                                    <ProviderContractDetails c={cont} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ):('')}{
            (reject)?(
            
                <> 
                <Divider style={{margin:"20px"}}/>
                <div class="col-md-6">
                    <label>Rejected</label>
                </div>
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>provider</th>
                                <th>job</th>
                                <th>response</th>
                                {/* <th>Position</th>
                        <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {reject.map(cont =>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">

                                            <div class="ms-3">
                                                <p class="fw-bold mb-1">{cont.provider.firstName} {cont.provider.lastName}</p>
                                                <p class="text-muted mb-0">{cont.provider.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">{cont.provider.speciality.label}</p>
                                        <p class="text-muted mb-0">{cont.job.title}</p>
                                    </td>
                                    {/* <td>
                                        <span class="badge badge-success rounded-pill d-inline">{cont.response}</span>
                                    </td> */}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ):('')
            }

        </div>
    )
}