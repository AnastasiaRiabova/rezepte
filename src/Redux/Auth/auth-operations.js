import axios from 'axios';
import authAction from './auth-actios';

axios.defaults.baseURL = 'http://slimmom-backend.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');
const logIn = userData => dispatch => {
  dispatch(authAction.loginRequest());

  axios
    .post('/auth/login', userData)
    .then(response => {
      // console.log(response);
      setToken(response.data.accessToken);
      dispatch(authAction.loginSuccess(response.data));
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
      dispatch(authAction.loginError(error.message));
    });
};

const registration = userData => dispatch => {
  dispatch(authAction.registrationRequest());

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
          // console.log(response);
          setToken(response.data.accessToken);
          dispatch(authAction.loginSuccess(response.data));
        })
        .catch(er => console.log(er));
      dispatch(authAction.registrationSuccess(response.data));
    })
    .catch(error => dispatch(authAction.registrationError(error)));
};

const logOut = () => dispatch => {
  // console.log('Hi');
  clearToken();
  dispatch(authAction.logoutSuccess());
};
const authRegistation = { registration, logIn, logOut, setToken };
export default authRegistation;
