import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actios';

const authReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { type, payload }) => {
    console.log(payload);
    return payload;
  },
  [actions.logoutSuccess]: (_, __) => null,
});

export default combineReducers({
  auth: authReducer,
});
