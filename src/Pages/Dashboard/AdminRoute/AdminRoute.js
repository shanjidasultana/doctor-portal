import React from 'react';
import { Redirect, Route } from 'react-router';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const  AdminRoute = ({children,...rest}) => {
    const {user,isLoading,admin}=useAuth();
    // console.log(user,isLoading,admin);

    if(isLoading){
        return <CircularProgress/>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email  && admin? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            )
        }
    />
        
    );
};

export default AdminRoute;