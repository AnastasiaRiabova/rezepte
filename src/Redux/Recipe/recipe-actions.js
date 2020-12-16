import { createAction } from "@reduxjs/toolkit";

const getRecipesRequest = createAction("recipes/getRecipesRequest");
const getRecipesSuccess = createAction("recipes/getRecipesSuccess");
const getRecipesError = createAction("recipes/getRecipesError");
const action = { getRecipesRequest, getRecipesSuccess, getRecipesError };
export default action;
