import { createReducer } from '@reduxjs/toolkit';
import authActions from '../Auth/auth-actios';
import recipeActions from '../Recipe/recipe-actions';
// import errorAct from './errors-action';

const errorReducer = createReducer(false, {
  [authActions.loginRequest]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.registrationRequest]: () => false,
  [authActions.registrationSuccess]: () => false,
  [authActions.registrationError]: () => true,
  [recipeActions.getRecipesRequest]: () => false,
  [recipeActions.getRecipesSuccess]: () => false,
  [recipeActions.getRecipesError]: () => true,
});

export default errorReducer;

// const errorReducer = createReducer(false, {
//   [errorAct]: (_, { payload }) => payload,
// });

// export default errorReducer;
