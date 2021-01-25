import { createReducer } from '@reduxjs/toolkit';
import authActions from '../Auth/auth-actios';
import recipeActions from '../Recipe/recipe-actions';

const loadingReducer = createReducer(false, {
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.registrationRequest]: () => true,
  [authActions.registrationSuccess]: () => false,
  [authActions.registrationError]: () => false,
  [recipeActions.getRecipesRequest]: () => true,
  [recipeActions.getRecipesSuccess]: () => false,
  [recipeActions.getRecipesError]: () => false,
});

export default loadingReducer;
