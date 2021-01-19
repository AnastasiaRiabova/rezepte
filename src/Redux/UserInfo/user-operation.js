import axios from 'axios';
import actions from './user-actions';

const getUser = userData => async dispatch => {
  axios.defaults.baseURL = 'http://slimmom-backend.herokuapp.com';
  axios.defaults.headers.common.Authorization = userData;
  dispatch(actions.getUserInfoRequest());
  axios
    .get('/user')
    .then(response => dispatch(actions.getUserInfoSuccess(response.data)))
    .catch(error => dispatch(actions.getUserInfoError(error)));
};

export default getUser;
