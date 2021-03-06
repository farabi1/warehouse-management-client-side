
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';

function RequireAuth({ children }) {

    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth




