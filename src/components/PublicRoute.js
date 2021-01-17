import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import selectors from '../Redux/Auth/auth-selectors';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuth = useSelector(selectors);
  //   const isAuth = false;
  //   console.log(isAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
