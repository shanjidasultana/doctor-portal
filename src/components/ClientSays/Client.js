import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Client = ({client}) => {
    const {name,picture,place,description}=client;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{display:'flex',justifyItems:'center',alignItems:'center'}}>
            <Card sx={{ maxWidth: 330,height:350,my:3,p:5,mx:'auto', }}>
                <CardContent sx={{textAlign:'start'}}>
                    <Typography paragraph>
                        {  description}
                    </Typography>
                </CardContent>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                    <CardMedia
                       style={{width:"90px"}}
                        component="img"
                        image={picture}
                        alt="Paella dish"
                    /> 
                    <Box sx={{ml:4,mt:4,textAlign:'start'}}>
                        <Typography variant="h6">
                            {name}
                        </Typography>
                        <Typography variant="body2"  sx={{color:"primary.main"}} >
                            {place}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Grid> 
    );
};

export default Client;