import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import {
  
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MyOrder from '../OrderManagement/MyOrder/MyOrder';
import Review from '../Pages/Review/Review';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import Pay from './Pay/Pay';
import UseAuth from '../Hooks/UseAuth';
import WelcomeDs from './WelcomeDs/WelcomeDs';


const drawerWidth = 240;

const Dashboard = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logOut, admin } = UseAuth();
  const history = useHistory();

  const handleLogOut = () => {
    
    logOut();
    history.push('/home')
    
  }

    const drawer = (
        <div>
            <Toolbar />
            
            <Divider />
            <List>
              <Link style={{ textDecoration: "none" }} to="/home"><button className="ds-Button">Home</button></Link>
                
            { !admin && <Box>
              <Link to={`${url}/myOrder`} style={{ textDecoration: "none" }} ><button className="ds-Button">My Order</button></Link>

              <Link to={`${url}/pay`} style={{ textDecoration: "none" }} ><button className="ds-Button">pay</button></Link>
    
              <Link to={`${url}/review`} style={{ textDecoration: "none" }} ><button className="ds-Button">Give Review</button></Link>
              
            
            </Box>}
                
            { admin && <Box>
              <Link to={`${url}/addProduct`} style={{ textDecoration: "none" }} ><button className="ds-Button">Add Product </button></Link>

              <Link to={`${url}/manageProduct`} style={{ textDecoration: "none" }} ><button className="ds-Button">Manage Product</button></Link>
                  
              <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}><button className="ds-Button">Make Admin</button></Link>
                  
              <Link to={`${url}/manageOrder`} style={{ textDecoration: "none" }} ><button className="ds-Button">Manage Order</button></Link>
            
            </Box>}
              <button onClick={handleLogOut} className="dSSignOut-btn" >Logout</button>
                
            </List>
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
            keepMounted: true, // Better open performance on mobile.
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
                  <Route exact path={`${path}/myOrder`}>
                      <MyOrder/>    
                  </Route>
                  <Route exact path={`${path}`}>
                      <WelcomeDs/>   
                  </Route>
                  <Route path={`${path}/review`}>
                      <Review/>
                  </Route>
                  <Route path={`${path}/addProduct`}>
                      <AddProduct/>
                  </Route>
                  <Route path={`${path}/manageProduct`}>
                      <ManageProduct/>
                  </Route>
                  <Route path={`${path}/makeAdmin`}>
                      <MakeAdmin/>
                  </Route>
                  <Route path={`${path}/manageOrder`}>
                      <ManageOrder/>
                  </Route>
                  <Route path={`${path}/pay`}>
                      <Pay/>
                  </Route>
              </Switch>
          
              
        </Box>
    </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Dashboard;