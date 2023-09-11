import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogIn = localStorage.getItem('userId');

  return isLogIn ?
    <Fragment>{children}</Fragment>
    :
    <Navigate to="/auth/sign-in" />
};

export default PrivateRoute;