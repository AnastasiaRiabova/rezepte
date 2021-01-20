import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import style from './App.module.css';

import routes from '../routes';
// import NotFound from './NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

function App() {
  return (
    <>
      <div className={style.container}>
        <Header>
          <UserInfo />
        </Header>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
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
    </>
  );
}

export default App;
