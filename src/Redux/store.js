import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import recipeReducer from "./Recipe/recipe-reducers";
import calculatorReducer from "./Calculator/calculator-reducers";
import authReducer from "./Auth/auth-reducers";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    calculator: calculatorReducer,
    auth: authReducer,
  },
  middleware: [...defaultMiddleware],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
