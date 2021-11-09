import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react';

import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const {token}=useAuth();
    const [success,setSuccess]=useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      };
    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        const user={email}
            if(user.email){
                fetch('http://localhost:9000/users/admin',{
                method:'PUT',
                headers:{
                    'authorization':`Bearer ${token}`,
                  'content-type': 'application/json'
                },
                body: JSON.stringify(user)
                
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.modifiedCount>0){
                        setSuccess(true)
                        // TextField.value=""
                    }
           })
        }
        
            
           
    }
    return (
        <div>
            {success&& <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                This is a success message!
                                </Alert>
                            </Snackbar>}
            <Typography variant="h4" sx={{my:8}}>Make an Admin</Typography>
            <form onSubmit={handleSubmit}>
            <TextField
                 sx={{width:'75%'}}
                label="Make Admin"
                variant="standard"
                color="warning"
                required
                onBlur={handleOnBlur}
                name="email"
                type="email"
                focused
            />

            <Button type="submit" variant="contained">Contained</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;