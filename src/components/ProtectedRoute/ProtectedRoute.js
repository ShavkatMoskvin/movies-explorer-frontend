import { React, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
    const navigate = useNavigate();
    if (!props.loggedIn) {
        return navigate('/');
    } else {
        return <Fragment><Component {...props}/></Fragment>;
    }
};

export default ProtectedRoute;