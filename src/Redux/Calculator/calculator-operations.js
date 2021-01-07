import axios from "axios";
import action from "./calculator-actions";
axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const getCalculatorInfo = (info) => (dispatch) => {
  console.log(info);
  dispatch(action.getCalculatorRequest());

  axios
    .post("/daily-rate", {
      weight: info.weight,
      height: info.height,
      age: info.age,
      desiredWeight: info.desiredWeight,
      bloodType: info.bloodType,
    })
    .then((response) => dispatch(action.getCalculatorSuccess(response.data)))
    .catch((error) => dispatch(action.getCalculatorError(error)));
};

export default getCalculatorInfo;
