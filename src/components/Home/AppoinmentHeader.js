import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Calender from '../SharedComponent/Calender';
import chair from '../../images/images/chair.png';
import  bg from '../../images/images/bg.png';
import AvailableAppointment from './AvailableAppointment';

const AppoinmentHeader = ({value,setValue}) => {
    const bgStyle={
        background:`url(${bg})`,
        height:'auto'

    }
    const appoinments=[
        {   id:"1",
            name:"Teeth Orthodontics",
            time:"8:00 AM-9:00 AM",
            space:8,
            price:23,
        },
        {   id:"2",
            name:"Cosmetic Dentistry",
            time:"10:00 AM-11:30 AM",
            space:3,
            price:50,
        },
        {   id:"3",
            name:"Teeth Cleaning",
            time:"8:00 AM-9:00 AM",
            space:7,
            price:42,
        },
        {   id:"4",
            name:"Cavity Protection",
            time:"5:00 PM-6:30 PM",
            space:4,
            price:25
        },
        {   id:"5",
            name:"Teeth Orthodontics",
            time:"7:00 AM-8:30 AM",
            space:5,
            price:65
        },
        {   id:"6",
            name:"Teeth Skeling",
            time:"8:00 PM-9:00 PM",
            space:2,
            price:20,
        },
    ]
    return (
      <>  
        <Container style={bgStyle}>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            Appointment
                        </Typography>
                        <Calender value={value} setValue={setValue}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} width="400" alt="" /> 
                    </Grid>
                
                </Grid>
        </Container>
       <Container sx={{my:5}}>
           <Typography variant="h4" color="info.main" sx={{my:4,fontWeight:'bold'}}>Available Appointment {value.toDateString()}</Typography>
       <Grid container spacing={1}>
        {
            appoinments.map(appointment=><AvailableAppointment
            Key={appointment.id}
            appointment={appointment}
            date={value}
            
            ></AvailableAppointment>)
        }    
        </Grid>
       </Container>
    </>        
    );
};

export default AppoinmentHeader;