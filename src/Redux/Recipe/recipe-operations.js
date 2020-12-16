import axios from "axios";
import action from "./recipe-actions";
axios.defaults.baseURL = "https://api.edamam.com";

const getAllRecipes = (search) => (dispatch) => {
  console.log(search);
  dispatch(action.getRecipesRequest());

  axios
    .get(
      `/search?q=${search}&app_id=4201534d&app_key=ac730a8b8a048ad137d8d0e0fc6fbb98`
    )
    .then((response) => dispatch(action.getRecipesSuccess(response.data)))
    .catch((error) => dispatch(action.getRecipesError(error)));
};

export default getAllRecipes;
