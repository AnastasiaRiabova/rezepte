import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import recipeReducer from './Recipe/recipe-reducers';
// import calculatorReducer from './Calculator/calculator-reducers';
import authReducer from './Auth/auth-reducers';
import getUserInfoReducer from './UserInfo/user-reducer';
import loadingReduces from './Loader/loading-reducer';
import errorReducer from './Errors/errors-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};
const recipePersistConfig = {
  key: 'recipe',
  storage,
  // whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    user: getUserInfoReducer,
    recipe: persistReducer(recipePersistConfig, recipeReducer),
    loading: loadingReduces,
    errors: errorReducer,
    // calculator: calculatorReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
