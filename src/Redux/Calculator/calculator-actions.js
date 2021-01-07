import { createAction } from "@reduxjs/toolkit";

const getCalculatorRequest = createAction("recipes/getCalculatorRequest");
const getCalculatorSuccess = createAction("recipes/getCalculatorSuccess");
const getCalculatorError = createAction("recipes/getCalculatorError");
const action = {
  getCalculatorRequest,
  getCalculatorSuccess,
  getCalculatorError,
};
export default action;
