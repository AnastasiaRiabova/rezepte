// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actios';

const authReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { type, payload }) => {
    // console.log(payload);
    return payload.user;
  },
  [actions.logoutSuccess]: (_, __) => null,
});

const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { type, payload }) => {
    // console.log(payload.accessToken, payload.sid);
    return {
      token: payload.accessToken,
      sid: payload.sid,
      refreshToken: payload.refreshToken,
    };
  },
  [actions.logoutSuccess]: (_, __) => null,
});
const auth = { user: authReducer, token: tokenReducer };
export default auth;
