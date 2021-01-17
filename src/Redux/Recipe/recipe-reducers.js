import { createReducer } from '@reduxjs/toolkit';
import action from './recipe-actions';

const recipeReducer = createReducer([], {
  [action.getRecipesSuccess]: (state, { type, payload }) => payload,
});

export default recipeReducer;
