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
import AddIcon from '@mui/icons-material/Add';



const idp = JSON.parse(localStorage.getItem('idp'))


export default function AddDescription(props) {

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

    const handleAdd = () => {
        setData({
            ...props.provider,
            description: description,
            
        })

         function addJob() {
            setLoading(true);

           axios.put('http://localhost:8088/provider/editProvider/' + idp.id , data)
           .then((response)=>{
            window.location.reload(false)
            // setOpen(false)
            console.log(response);
            setLoading(false);
           })     
          
             .catch ((error)=>{
                console.error(error);
                setLoading(false);
            })
        }

        addJob()
    }

    console.log("dessssssssssssss",data)
    if (loading) {

        return <div className="App"><CircularProgress /></div>;
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
            <AddIcon />Add Description
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Description</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* To subscribe to this website, please enter your email address here. We
                        will send updates occasionally. */}
                    </DialogContentText>
                   
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
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
