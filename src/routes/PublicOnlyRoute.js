import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

const PublicOnlyRoute = ({ children }) => {
  const isLogIn = localStorage.getItem('userId');

  return !isLogIn ?
    <Fragment>{children}</Fragment>
    :
    <Navigate to="/" />
};

export default PublicOnlyRoute;