import { Container, Grid, Typography ,Box} from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';

const Contact = () => {
    return (
        <Container style={{marginTop:"-150px"}}>
            <Grid container sx={{mt:6,textAlign:'center'}} spacing={3}>
                                <Grid item xs={12}  md={4}>
                                <Box height='180px' sx={{backgroundColor:"#f3ffcf",pt:2}}>
                                    <AccessAlarmsIcon  style={{fontSize:'70px',color:"brown"}}/>
                                        <Typography variant="h4" >
                                            Opening Hours
                                        </Typography>
                                        <Typography variant="p">
                                            Open from moring 9:00 am from evening 12:00pm
                                        </Typography>
                                    </Box>
                                    
                                  
                                </Grid>
                                <Grid item xs={12} md={4}>
                                <Box  height='180px'sx={{backgroundColor:"#dbffe8",pt:2}}>
                                        <AddLocationAltIcon style={{fontSize:'70px',color:"brown"}}/>
                                        <Typography variant="h4">
                                           Visit Our Location 
                                        </Typography>
                                        <Typography variant="p">
                                          Brooklyn ,NY 36,  Chittagong.
                                        </Typography>
                                    </Box>
                                    
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box  height='180px'sx={{backgroundColor:"#f3ffcf",pt:2}}>
                                        <PhoneInTalkIcon style={{fontSize:'70px',color:"brown"}}/>
                                        <Typography variant="h4" >
                                        Contact Us Now
                                        </Typography>
                                        <Typography variant="p">
                                           +0124536789920
                                        </Typography>
                                    </Box>
                                
                                </Grid>
                        </Grid>
        </Container>
    );
};

export default Contact;