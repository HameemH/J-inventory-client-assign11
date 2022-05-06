import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebse.init';
import { useLocation, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    } else{
        return <Navigate to="/login" state={{from: location}} replace />
    }
};

export default RequireAuth;