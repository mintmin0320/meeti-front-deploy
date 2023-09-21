import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLogIn = localStorage.getItem('userId');

  return isLogIn ?
    <Fragment>{children}</Fragment>
    :
    <Navigate to="/auth/sign-in" />
};