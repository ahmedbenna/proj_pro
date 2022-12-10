import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const idp = JSON.parse(localStorage.getItem('idp'))


export default function DeleteJob(props) {

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {

        function deleteJob() {
            setLoading(true);
            axios.delete('http://localhost:8088/job/deleteJob/' + idp.id)
                .then((response) => {
                    setOpen(false)
                    window.location.reload(false)
                    console.log(response);
                    setLoading(false);
                })

                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                })
        }

        deleteJob()
    }
    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <DeleteForeverIcon/> Delete job
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Delete this job {props.job.title} ?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
