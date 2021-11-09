import login from '../../images/images/login.png'
import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Snackbar, TextField,Typography } from '@mui/material';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [success,setSuccess]=useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      };
    const history=useHistory();
    const location =useLocation();
    const {loginUser,user,isLoading,error,signInWithGoogle,logoutUser}=useAuth()
    const [userData,setUserData]=useState({})
    const handleChange=e=>{
        const textField=e.target.name;
        const inputValue=e.target.value;
        const newData={...userData};
        newData[textField]=inputValue;
        setUserData(newData);
    }
    const handleFormSubmit=e=>{
        loginUser(userData.email,userData.password,history,location)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(history,location)
    }
    const handleLogout=()=>{
        logoutUser()
    }
    return (
       <Container sx={{my:9}}>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mx:'auto',}}>
                   <form onSubmit={handleFormSubmit}>
                   <Typography variant="subtitle2" gutterBottom component="div">
                        LOGIN 
                    </Typography>
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
                            /><br/><br/>
                        <Button color="primary" type="submit" sx={{ width: '75%', m: 1 }}>Login</Button>    
                   </form>
                   <NavLink to="/register">
                       <Button>New User ? PLease Register</Button>
                   </NavLink>
                   {isLoading && <CircularProgress/>}
                   {
                       user.email && <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                       <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                       This is a success message!
                       </Alert>
                        </Snackbar>
                   }
                    {error && <Alert severity="error">{error}</Alert>}

                    <br/><br/>
                    ============================!===========================
                    
                    <Button sx={{m:5,px:5}} onClick={handleGoogleSignIn}>Sign In With Google</Button>
                    <Button sx={{px:5}} onClick={handleLogout}>Logout</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} width='520' alt="" />
                </Grid>
            </Grid>
       </Container>
    );
};

export default Login;