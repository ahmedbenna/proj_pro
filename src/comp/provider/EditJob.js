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
import EditIcon from '@mui/icons-material/Edit';


const idp = JSON.parse(localStorage.getItem('idp'))


export default function EditJob(props) {

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [title, setTitle] = useState(props.job.title);
    const [description, setDescription] = useState(props.job.description);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleJob = () => {
        setData({
            title: title,
            description: description
        })

        function addJob() {
            setLoading(true);

            axios.put('http://localhost:8088/job/editJob/' + idp.id, data)
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

        addJob()
    }
    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                <EditIcon /> Edit job
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* To subscribe to this website, please enter your email address here. We
                        will send updates occasionally. */}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <TextField
                        multiline
                        rows={5}
                        autoFocus
                        margin="dense"
                        name="description"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleJob}>Edit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
