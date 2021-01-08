import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import selectors from '../Redux/Auth/auth-selectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuth = useSelector(selectors);
  //   const isAuth = true;
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
