import axios from 'axios';
import authAction from './auth-actios';
// to enter new priver Route we have to setTocken, because we clean it up by RecipeRequest

// const setToken = token =>
// (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');
const logIn = userData => dispatch => {
  axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';
  dispatch(authAction.loginRequest());

  axios
    .post('/auth/login', userData)
    .then(response => {
      // setToken(response.data.accessToken);
      dispatch(authAction.loginSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
      dispatch(authAction.loginError(error.message));
    });
};

const registration = userData => dispatch => {
  dispatch(authAction.registrationRequest());
  axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';
  axios
    .post('/auth/register', userData)
    .then(response => {
      // const { email, password } = userData;
      axios
        .post('/auth/login', {
          email: userData.email,
          password: userData.password,
        })
        .then(response => {
          // setToken(response.data.accessToken);
          dispatch(authAction.loginSuccess(response.data));
        })
        .catch(er => console.log(er));
      dispatch(authAction.registrationSuccess(response.data));
    })
    .catch(error => dispatch(authAction.registrationError(error)));
};

const logOut = () => dispatch => {
  clearToken();
  dispatch(authAction.logoutSuccess());
};
const authRegistation = {
  registration,
  logIn,
  logOut,
  // setToken
};
export default authRegistation;
