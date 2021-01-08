import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './calculator-actions';

const calculatorReducer = createReducer(
  {},
  {
    [action.getCalculatorSuccess]: (state, { type, payload }) => payload,
  },
);

export default combineReducers({
  calculatorReducer,
});
