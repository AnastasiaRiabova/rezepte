import { createAction } from '@reduxjs/toolkit';

const getCalculatorRequest = createAction('calculator/getCalculatorRequest');
const getCalculatorSuccess = createAction('calculator/getCalculatorSuccess');
const getCalculatorError = createAction('calculator/getCalculatorError');
const action = {
  getCalculatorRequest,
  getCalculatorSuccess,
  getCalculatorError,
};
export default action;
