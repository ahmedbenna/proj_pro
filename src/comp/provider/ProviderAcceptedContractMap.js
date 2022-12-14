
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { IconButton, Typography } from '@mui/material';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

export default function ProviderAcceptedContractMap(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Marker key={props.p.id} longitude={parseFloat(props.p.longitude)} latitude={parseFloat(props.p.latitude)} anchor="bottom" >
                <IconButton aria-describedby={id} type="button" onClick={handleClick}  >
                    <img style={{ width: '20px', height: '25px' }} src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />
                </IconButton>
            </Marker>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Link style={{ textDecoration: 'none' }} state={{ id: props.p.id }} to='/ProviderPresenting'>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <Typography variant='h6' >{props.p.client.firstName}</Typography>
                        <Typography variant='h6'> {props.p.client.lastName}</Typography>
                        <Typography variant='body2'>{props.p.job.label}</Typography>


                    </Box>
                </Link>

            </Popper>
        </div>
    );
}