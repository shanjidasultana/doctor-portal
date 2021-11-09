import login from '../../images/images/login.png'
import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField,Typography } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { NavLink,useHistory } from 'react-router-dom';

const Register = () => {
    const {user,registerUser,isLoading}=useAuth();
    const history=useHistory()
    const [userData,setUserData]=useState({})
        const handleChange=e=>{
            const textField=e.target.name;
            const inputValue=e.target.value;
            const newData={...userData};
            newData[textField]=inputValue;
            setUserData(newData);
        }
        const handleFormSubmit=e=>{
            if(userData.password!==userData.passwordRecheck){
                alert('Your password did not match')
                
            }
            console.log(isLoading);
            registerUser(userData.email,userData.password,userData.name,history)
            e.preventDefault();
            setUserData({})
        }

        return (
           <Container sx={{my:9}}>
               
               <Grid container spacing={2}>
               
                    <Grid item xs={12} md={6} sx={{mx:'auto',}}>
                       <form onSubmit={handleFormSubmit}>
                       <Typography variant="subtitle2" gutterBottom component="div">
                        REGISTER  
                        </Typography>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Name"
                                variant="standard"
                                color="warning"
                                name="name"
                                onChange={handleChange}
                                />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Email"
                                type="email"
                                variant="standard"
                                color="warning"
                                name="email"
                                onChange={handleChange}
                                />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Password"
                                type="password"
                                variant="standard"
                                name="password"
                                color="warning"
                                onChange={handleChange}
                                />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Re-Enter Password"
                                type="password"
                                variant="standard"
                                name="passwordRecheck"
                                color="warning"
                                onChange={handleChange}
                                /><br/><br/>
                            <Button type="submit" sx={{ width: '75%', m: 1 }} color="primary">Register Now</Button>    
                            {isLoading && <CircularProgress/>}
                            {user?.email && <NavLink to="/login"><Button>Already Register Please Login</Button></NavLink>}
                            {user?.email && <Alert autoHideDuration={6000}  severity="success">User Created successfully!</Alert>}                       </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} width='520' alt="" />
                    </Grid>
                </Grid>
           </Container>
    );
};

export default Register;