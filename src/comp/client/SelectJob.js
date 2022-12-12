import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import AddContractPosition from './AddContractPosition';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectJob(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <div class="col-lg-3 col-md-6 bodyyyy " style={{ marginTop: '50px' }}>
                    <div class="carddd d-flex align-items-center justify-content-center">
                        <div class="ribon">
                            <span class="material-icons">
                                rocket
                            </span>
                        </div>
                        <ul class="mb-12 list-unstyled text-muted">
                            <p class="h-1 pt-5">{props.jo.title}</p>
                            <li>
                                {props.jo.description}
                            </li>
                            {/* <EditJob job={jo} />
                                                    <DeleteJob job={jo} /> */}
                        </ul>

                    </div>
                </div>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add Job
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            Confirme
                        </Button> */}
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Typography variant='h4'>Add Location for the job</Typography>
                    </Grid>
                    <Grid item xs={12 }>
                        <Divider />
                    </Grid>
                    <Grid item xs={12 }>
                        <AddContractPosition  pr={props.pr} jo={props.jo}/>
                    </Grid>
                </Grid>


            </Dialog>
        </div>
    );
}