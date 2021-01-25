import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import style from './App.module.css';
import selector from '../Redux/Auth/auth-selectors';
import routes from '../routes';
// import NotFound from './NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

function App() {
  const isAuth = useSelector(selector);
  return (
    <>
      <div className={isAuth ? style.privateBg : style.publicBg}>
        <Header>
          <UserInfo />
        </Header>
        <div className={style.container}>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
              {/* <Route component={NotFound} /> */}
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
