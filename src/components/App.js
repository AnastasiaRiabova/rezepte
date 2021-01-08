import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import LoginView from './View/LoginView/LoginView';
import RegistrationView from './View/RegistrationView/RegistrationView';
import HomeView from './View/HomeView/HomeView';
// import SearchForm from './SearchForm/SearchForm';
import routes from '../routes';
// import NotFound from './NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <UserInfo />
        </Header>
        {/* <SearchForm /> */}
        {/* <HomeView />
        <LoginView />
        <RegistrationView /> */}
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
