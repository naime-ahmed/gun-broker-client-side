import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    
    const { user, isLoading, admin } = UseAuth();
    if (isLoading) {
        return <div style={{textAlign:"center", height:"100vh", marginTop:'100px'}}><CircularProgress /></div>
    }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) => user.email && admin ? children : <Redirect
                    to={{
                        pathname: '/',
                        state: {from: location}
                    }}
                />}
            >
            </Route>
        );
    }
};

export default AdminRoute;