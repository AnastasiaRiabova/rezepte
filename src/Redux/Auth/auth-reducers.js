import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./auth-actios";

const authReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { type, payload }) => {
    // console.log(payload.access_token);
    return payload.access_token;
  },
  [actions.logoutSuccess]: (_, __) => null,
});

export default combineReducers({
  auth: authReducer,
});
