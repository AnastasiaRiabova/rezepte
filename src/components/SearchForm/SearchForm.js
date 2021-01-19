import { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css';
// import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import operations from '../../Redux/Recipe/recipe-operations';
import style from './SearchForm.module.css';
import getRecipe from '../../Redux/Recipe/recipe-selectors';
import NutrientsCount from '../NutrientsCount/NutrientsCount';

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
      <>
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
          <div className={style.listStyle}>
            <ul className={style.listView}>
              {this.props.recipe &&
                this.props.recipe.map((el, inx) => (
                  <li
                    className={style.itemView}
                    key={el.recipe.calories}
                    data={inx}
                    onClick={this.getIndex}
                  >
                    {/* <div className="row"> */}
                    <div className="col s4 m8">
                      <div className="card">
                        <div className="card-image">
                          <img src={el.recipe.image} alt="food" />
                          <span className="card-title">{el.recipe.label}</span>
                        </div>
                        <div className="card-content">
                          <ul className={style.linkView}>
                            Ingredients:
                            {el.recipe.ingredients.map((el, ind) => (
                              <li key={ind}>{el.text}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="card-action">
                          <a href={el.recipe.url} target="_blanc">
                            Get full recipe here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </li>
                ))}
            </ul>
          </div>
          <div className={style.calculator}>
            <NutrientsCount index={this.state.getIndex} />
          </div>
        </div>
      </>
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
