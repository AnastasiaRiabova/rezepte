import { createReducer } from '@reduxjs/toolkit';
import action from './user-actions';
import actionsCalc from '../Calculator/calculator-actions';

const getUserInfoReducer = createReducer(
  {},
  {
    [action.getUserInfoSuccess]: (state, { type, payload }) => payload,
    [actionsCalc.getCalculatorSuccess]: (state, { payload }) => ({
      ...state,
      userData: { ...state.userData, ...payload.response, ...payload.myInfo },
    }),
  },
);

export default getUserInfoReducer;
