import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {user,logoutUser}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 ,mb:6}} >
      <AppBar position="static" style={{backgroundColor:'#90caf9'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Doctors Potal
          </Typography>
          <NavLink style={{textDecoration:'none',marginRight:'10px',color:'white'}} to="/home">Home</NavLink>
          <NavLink style={{textDecoration:'none',marginRight:'10px',color:'white'}} to="/appointment">Appointment</NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
          {
            user?.email? <Button color="inherit" onClick={logoutUser}>Logout</Button>:<NavLink style={{textDecoration:'none',marginRight:'10px',color:'white'}} to="/login"><Button color="inherit">Login</Button></NavLink>

          }
          
        </Toolbar>
      </AppBar>
    </Box>

    );
};

export default Header;