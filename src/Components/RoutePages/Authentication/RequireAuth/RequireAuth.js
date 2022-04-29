import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebse.init';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if(loading){
        return <p>Loading</p>
    }
    if(user){
        return children;
    } else{
        return <Navigate to="/login" state={{from: location}} replace />
    }
};

export default RequireAuth;