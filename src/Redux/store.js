import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import recipeReduser from "./Recipe/recipe-reducers";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: recipeReduser,
  middleware: [...defaultMiddleware],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
