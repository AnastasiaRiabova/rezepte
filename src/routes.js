import { lazy } from 'react';

const routes = [
  // {
  //   path: '/',
  //   label: 'start',
  //   exact: true,
  //   component: lazy(() => import('./components/View/HomeView/HomeView')),
  //   private: true,
  // },
  {
    path: '/registration',
    label: 'Registration',
    exact: false,
    component: lazy(() =>
      import('./components/View/RegistrationView/RegistrationView'),
    ),
    private: false,
  },
  {
    path: '/login',
    label: 'Login',
    exact: false,
    component: lazy(() => import('./components/View/LoginView/LoginView')),
    private: false,
  },
  {
    path: '/home',
    label: 'Home',
    exact: false,
    component: lazy(() => import('./components/MainSection/MainSection')),
    private: true,
  },
];
export default routes;
