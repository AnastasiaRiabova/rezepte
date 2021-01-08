import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './Redux/store';
import { Provider } from 'react-redux';
import './index.css';
// import persistor from './Redux/store';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
