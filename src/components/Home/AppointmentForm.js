import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth'
import { useState } from 'react';

const AppointmentForm = ({open,handleCloseModal,time,date,name}) => {
  const {user}=useAuth();
  const initialInfo={ patientName: user.displayName, email: user.email, phone: '' }
  const [patient,setPatient]=useState(initialInfo)
  const handleOnBlur=e=>{
    const text=e.target.name;
    const textValue=e.target.value;
    const newPatient={...patient}
    newPatient[text]=textValue
    setPatient(newPatient)
  }

  const handleBooking=e=>{
    const appointment={
      ...patient,
      time,
      date:date.toLocaleDateString(),
      serviceName:name
    }
    fetch('https://fierce-fortress-81249.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                  handleCloseModal();
                }
            });
    e.preventDefault();
  }
  const style={
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    }
  
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        handleCloseModal={handleCloseModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
            <Box sx={style}>
            <Typography variant="h4" color="info.main" sx={{my:4,fontWeight:'bold'}}>{name}</Typography>
                <form onSubmit={handleBooking}>
                    <TextField style={{width:'90%',margin:"5px auto"}}
                    id="outlined-size-normal"
                    label="Your Name"
                    name="patientName"
                    required
                    variant="outlined"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    />
                    <TextField style={{width:'90%',margin:"5px auto"}}
                    id="outlined-size-normal"
                    label="Your Email"
                    name="email"
                    variant="outlined"
                    required
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    />
                    <TextField style={{width:'90%',margin:"5px auto"}}
                    id="outlined-size-normal"
                    defaultValue="Phone Number"
                    onBlur={handleOnBlur}
                    variant="outlined"
                    name="phoneNumber"
                    required
                    />
                    <TextField style={{width:'90%',margin:"5px auto"}}
                    id="outlined-size-normal"
                    disabled
                    defaultValue={time}
                    variant="outlined"
                    />
                    <TextField style={{width:'90%',margin:"5px auto"}}
                    id="outlined-size-normal"
                    disabled
                    defaultValue={date.toDateString()}
                    variant="outlined"
                    /><br/><br />
                    <Button type="submit" variant="contained" color="primary">Send</Button>
                    
                </form>
            </Box>
        </Fade>
      </Modal>
    );
};

export default AppointmentForm;