import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../Redux/Recipe/recipe-operations';
import style from './SearchForm.module.css';
import getRecipe from '../../Redux/Recipe/recipe-selectors';
import Calculator from '../Calculator/Calculator';

export class SearchForm extends Component {
  state = {
    inputValue: '',
    getIndex: '',
  };
  getIndex = e => {
    this.setState({ getIndex: e.currentTarget.attributes.data.value });
  };
  toGetInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.getRecipes(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <div className={style.position}>
        <form action="" onSubmit={this.onSubmit}>
          <input
            className={style.searchInput}
            type="text"
            onInput={this.toGetInputValue}
            value={this.state.inputValue}
          />
          <button>Submit</button>
        </form>
        <ul>
          {this.props.recipe &&
            this.props.recipe.map((el, inx) => (
              <li key={el.recipe.calories} data={inx} onClick={this.getIndex}>
                <img src={el.recipe.image} alt="food" />

                <ul>
                  Ingredients:
                  {el.recipe.ingredients.map((el, ind) => (
                    <li key={ind}>{el.text}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>

        <div className={style.calculator}>
          <Calculator index={this.state.getIndex} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  recipe: getRecipe(state),
});

const mapDispatchToProps = {
  getRecipes: operations,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
