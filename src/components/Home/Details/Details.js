import { Button, Container, Grid, Typography } from '@mui/material';
import treatment from '../../../images/images/treatment.png'
import React from 'react';
import { Box } from '@mui/system';

const Details = () => {
    return (
        <Container>
           <Grid container spacing={2} >
                <Grid item xs={12}  md={6}>
                    <img src={treatment} width="400" alt="" />
                </Grid>    
                <Grid item xs={12}  md={6} sx={{display:"flex", justifyItems:'center'}}>
                    <Box  sx={{textAlign:'start'}}>
                            <Typography variant="h3" sx={{my:3}}>
                                Exceptional Dental Care,on your Terms
                            </Typography>
                            <Typography variant="body2">
                            First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.
                            </Typography>
                            <Button sx={{my:5}} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>    
            </Grid> 
        </Container>
    );
};

export default Details;