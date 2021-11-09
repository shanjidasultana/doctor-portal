import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  people1   from '../../images/images/people-1.png'
import  people2   from '../../images/images/people-2.png'
import  people3   from '../../images/images/people-3.png'
import Client from './Client';

const ClientSays = () => {
    const clients=[
        {
            id:'1',
            name:'Wasin Albert',
            place:'Chittagong',
            picture:people1,
            description:'First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.'
        },
        {
            id:'2',
            name:'Alisa Anvira',
            place:'Dhaka',
            picture:people2,
            description:'First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.'
        },
        {
            id:'3',
            name:'PisChira Morina',
            place:'Rajshahi',
            picture:people3,
            description:'First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.'
        }
    ]
    return (
        <Container sx={{mb:5}}>
            <Box  sx={{textAlign:'start'}}>
                <Typography variant="h5"  sx={{my:3,color:"primary.main"}}>
                    Testimonial
                </Typography>
                <Typography variant="h3" sx={{my:3}}>
                    What's Our Patients Says
                </Typography>
            </Box>
            <Grid container spacing={2} >
                  {
                      clients.map(client=><Client
                      key={client.id}
                      client={client}
                      >
                      </Client>)
                  }
            </Grid>
        </Container>
    );
};

export default ClientSays;