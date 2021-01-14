import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import routes from '../routes';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

function App() {
  return (
    <>
      <div className="App">
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
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
