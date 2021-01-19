import axios from 'axios';
import action from './calculator-actions';
axios.defaults.baseURL = 'http://slimmom-backend.herokuapp.com';

const getCalculatorInfo = (info, id, token) => dispatch => {
  console.log(info, id, token);
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
