import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

export default function PublicOnlyRoute({ children }) {
  const isLogIn = localStorage.getItem('userId');

  return !isLogIn ?
    <Fragment>{children}</Fragment>
    :
    <Navigate to="/" />
};