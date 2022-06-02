import { Button, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name,setName]=useState('')
    const [success, setSuccess] = useState(false);
    const [email,setEmail]=useState('')
    const [image,setImage]=useState(null)
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:9000/doctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <Typography variant="h2">Add Doctor</Typography>
            <form onSubmit={handleSubmit}>
           
                    <TextField  
                    sx={{width:'50%',bgcolor:'ThreeDHighlight',my:4}}
                    label="Doctor Name"
                    variant="filled"
                    required
                    type="text"
                    onChange={e=>setName(e.target.value)}
                    /><br/>
                    <TextField
                    sx={{width:'50%',bgcolor:'ThreeDHighlight',my:3}}  
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    onChange={e=>setEmail(e.target.value)}
                    /><br/>
                     <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    /><br/><br/>
            
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            

            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;