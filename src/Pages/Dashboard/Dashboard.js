import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHome from './DashboardHome';
import { Button } from '@mui/material';
import { Link ,useRouteMatch,Switch} from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from '../Login/Firebase/PrivateRoute/PrivateRoute';
import useAuth from '../../Hooks/useAuth';
import Payment from './Payment';
import AddDoctor from './AddDoctor';


const drawerWidth = 150;

function Dashborad(props) {
  const {admin}=useAuth();
  console.log(admin);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {path,url}=useRouteMatch()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
      {
        admin && <Box>
          <Link to={`${url}/makeAdmin`}><Button color="inherit">MakeAdmin</Button></Link>
      <Link to={`${url}/addDoctor`}><Button color="inherit">Add Doctor</Button></Link>
        </Box>
      }
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
        <Switch>
            <PrivateRoute exact path={path}>
              <DashboardHome></DashboardHome>
            </PrivateRoute>
            <PrivateRoute  path={`${path}/payment/:paymentId`}>
              <Payment></Payment>
            </PrivateRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addDoctor`}>
              <AddDoctor></AddDoctor>
            </AdminRoute>
         
        </Switch>
      </Box>
    </Box>
  );
}

Dashborad.propTypes = {
  window: PropTypes.func,
};

export default Dashborad;

