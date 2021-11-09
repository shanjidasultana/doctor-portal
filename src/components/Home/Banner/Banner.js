import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/images/chair.png' 
import bg from '../../../images/images/bg.png'


import { Box} from '@mui/system';
const Banner = () => {
    const bgStyle={
        padding:'100px',
        background:`url(${bg})`,
        backgroundColor: 'rgba(172, 165, 214 , 0.32)',
        backgroundBlendMode:'light, luminosity'
    }
    // const imgStyle={
    //     backgroundColor:'rgba(103, 69, 143 ,0.9)',
    //     top:'0%',
    //     zIndex:"-1",
    //     left:'0%',
    //     height:'500px',
    //     width:'80%'
    // }
    return (
        <Container style={ bgStyle}>
            <Grid container spacing={4}>
                        <Grid item  height="500px" xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                           <Box  sx={{textAlign:'start'}} >
                           <Typography variant="h2" sx={{my:5}} >
                                Your New Smile Starts Here
                            </Typography>
                            <Typography variant="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quo sapiente aspernatur sit totam adipisci consectetur perferendis magnam, itaque ipsam!
                            </Typography><br />
                            <Button  sx={{my:5}} variant="contained">Get Appointment</Button>
                           </Box>
                            </Grid>
                        <Grid item  height="500px" xs={12} md={6} sx={{display:'flex', alignItems: 'center',justifyContent:'center'}} >
                                <img src={chair}
                                width='460px'
                                alt="" />
                        </Grid>
            </Grid>
            
        </Container>
    );
};

export default Banner;