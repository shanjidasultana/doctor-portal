import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Service = ({service}) => {
    const {description,img,name}=service;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{my:5}}>
                    <Card sx={{ minWidth: 275,height:440 }}>
                        <CardMedia
                        component="img"
                        style={{width:"200px",margin:"15px auto"}}
                        image={img}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                            </Typography>
                        </CardContent>
                    </Card>
        </Grid>
    );
};

export default Service;