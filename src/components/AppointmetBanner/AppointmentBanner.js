import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../images/images/doctor.png';
import bg from '../../images/images/bg.png';
const AppointmentBanner = () => {
    const bannerStyle={
        background:`url(${bg})`,
        backgroundColor: 'rgba(172, 165, 214 , 0.9)',
        backgroundBlendMode:'light, luminosity',
        margin:'165px auto 60px'
    }
    return (
        <Container style={bannerStyle} >
            <Grid container spacing={2} >
                <Grid item xs={12}  md={6}>
                    <img src={doctor} height="590" width="600" style={{marginTop:"-160px"}} alt="" />
                </Grid>    
                <Grid item xs={12}  md={6} sx={{display:"flex", justifyItems:'center'}}>
                    <Box>
                            <Typography variant="body2"  sx={{my:3,color:"primary.main"}}>
                                Exceptional Dental Care,on your Terms
                            </Typography>
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

export default AppointmentBanner;