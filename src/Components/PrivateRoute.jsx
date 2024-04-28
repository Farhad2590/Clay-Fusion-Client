import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import { AUthContext } from '../Autprovider/Authprovider';


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AUthContext)
    const location = useLocation()

    if (loader) {
        return <div className='text-center gap-2'>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;