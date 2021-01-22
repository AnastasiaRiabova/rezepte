import axios from 'axios';
import action from './calculator-actions';
// axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';

const getCalculatorInfo = (info, id, token) => dispatch => {
  axios.defaults.baseURL = 'https://slimmom-backend.herokuapp.com';
  axios.defaults.headers.common.Authorization = token;
  dispatch(action.getCalculatorRequest());

  axios
    .post(`/daily-rate/${id}`, info)
    .then(response => {
      dispatch(
        action.getCalculatorSuccess({ response: response.data, myInfo: info }),
      );
    })
    .catch(error => dispatch(action.getCalculatorError(error)));
};

export default getCalculatorInfo;
