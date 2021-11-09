import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  people1   from '../../images/images/people-1.png'
import  people2   from '../../images/images/people-2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Blogs = () => {

    return (
        <Container sx={{mb:5}}>
            <Box  sx={{textAlign:'start'}}>
                <Typography variant="h5"  sx={{my:3,color:"primary.main"}}>
                    OUR BLOG
                </Typography>
                <Typography variant="h3" sx={{my:3}}>
                   From Our BLog News
                </Typography>
            </Box>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={4} >
            <Card sx={{maxWidth: 600,height:370,my:3,p:5,mx:'auto', background:' linear-gradient( #00e5ff,#bbdefb ) '}}>
                  <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                          <Box sx={{ml:4,mt:4,textAlign:'start'}}>
                              <Typography variant="h6">
                                  Rashed Kabir
                              </Typography>
                              <Typography variant="body2"  sx={{color:"primary.main"}} >
                                  22 Aug 2019
                              </Typography>
                          </Box>
                          

                  </Box>
                  <CardContent sx={{textAlign:'start'}}>
                      <Typography variant="h5">
                      Check at least a doctor in a year for your teeth.
                      </Typography>
                  </CardContent><br/><br/><br/>
                  <ArrowForwardIcon sx={{color:"violet",fontSize:"45px"}}/>

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >  
            <Card sx={{ maxWidth: 300,height:370 ,my:3,p:5,mx:'auto',}} >
                 <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                     <CardMedia
                         style={{width:"90px"}}
                             component="img"
                             image={people1}
                             alt="Paella dish"
                         /> 
                         <Box >
                             <Typography variant="h6">
                             Wasin Albert
                             </Typography>
                             <Typography variant="body2"  sx={{color:"primary.main"}} >
                             23 April 2020
                             </Typography>
                         </Box>
                 </Box>
                 <CardContent>
                     <Typography variant="h5">
                     2 times of brush in a day can keep you healthy
                     </Typography>
                     <Typography paragraph>
                     First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.
                     </Typography>
                 </CardContent>
          
             </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4} > 
             <Card sx={{ maxWidth: 300,height:370,my:3,p:5,mx:'auto', }}>
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                                <CardMedia
                                    style={{width:"90px"}}
                                        component="img"
                                        image={people2}
                                        alt="iamge"
                                    /> 
                                    <Box>
                                        <Typography variant="h6">
                                        Alisa Anvira 
                                        </Typography>
                                        <Typography variant="body2"  sx={{color:"primary.main"}} >
                                        27 April 2021
                                        </Typography>
                                    </Box>
                            </Box>
                            <CardContent sx={{textAlign:'start'}}>
                                <Typography variant="h5">
                                The tooth cancer is taking a challenge
                                </Typography>
                                <Typography paragraph>
                                First Impressions DentalFirst Impressions Dental is an established dental network run by a diverse team of highly experienced dentists. We provide family dentistry of the highest quality, and ensure our clients have the most comfortable experience possible.
                                </Typography>
                            </CardContent>
                            
                        </Card> 
                    </Grid>    

          
              
                
            </Grid>
        </Container>   
    );
};

export default Blogs;