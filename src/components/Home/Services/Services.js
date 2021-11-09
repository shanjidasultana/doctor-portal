import React from 'react';
import fluoride from '../../../images/images/fluoride.png';
import cavity from '../../../images/images/cavity.png';
import whitening from '../../../images/images/whitening.png';
import { Container, Grid, Typography } from '@mui/material';
import Service from './Service';
const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: whitening
        }
    ]
    return (
        <Container sx={{my:9}}>
                <Typography variant='h3' >Sevices We Provide</Typography>
            <Grid container spacing={2}>
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;