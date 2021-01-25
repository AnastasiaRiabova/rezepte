import { createReducer } from '@reduxjs/toolkit';
import authActions from '../Auth/auth-actios';
import recipeActions from '../Recipe/recipe-actions';

const errorReducer = createReducer(false, {
  [authActions.loginRequest]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => true,
  [authActions.registrationRequest]: () => false,
  [authActions.registrationSuccess]: () => false,
  [authActions.registrationError]: () => true,
  [recipeActions.getRecipesRequest]: () => false,
  [recipeActions.getRecipesSuccess]: () => false,
  [recipeActions.getRecipesError]: () => true,
});

export default errorReducer;
