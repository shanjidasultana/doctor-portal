import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AppointmentForm from './AppointmentForm';

const AvailableAppointment = ({appointment,date}) => {
    const {name,time,space,price}=appointment;
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true);
      };
    const handleCloseModal = () => {
        setOpen(false);
      };

    return (
        <>
            <Grid container item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{my:3,p:5,mx:'auto'}}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}} gutterBottom component="div" color="success.main">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography varient="subtitle2">
                        {space} Spaces Available
                    </Typography><br />
                    <Typography varient="body2">
                    Price:${price} 
                    </Typography><br />
                    <Button onClick={handleOpenModal} variant="contained" color="primary">
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <AppointmentForm
             date={date}
             handleCloseModal={ handleCloseModal}
             open={open}
             name={name}
             time={time}
             price={price}
            ></AppointmentForm>
        </>
       
    );
};

export default AvailableAppointment;