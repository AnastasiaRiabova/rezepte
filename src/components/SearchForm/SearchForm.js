import { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css';
import { CircularProgress } from '@material-ui/core';
import operations from '../../Redux/Recipe/recipe-operations';
import style from './SearchForm.module.css';
import getRecipe from '../../Redux/Recipe/recipe-selectors';
import loadingSelectors from '../../Redux/Loader/loading-selectors';
import NutrientsCount from '../NutrientsCount/NutrientsCount';
import Button from '../UIComponents/Button/Button';

export class SearchForm extends Component {
  state = {
    inputValue: '',
    getIndex: '',
    nextPage: 0,
  };

  getIndex = e => {
    this.setState({ getIndex: e.currentTarget.attributes.data.value });
  };
  toGetInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.getRecipes(this.state.inputValue, this.state.nextPage);
    // this.setState({ inputValue: '' });
  };
  toNextPage = async () => {
    await this.setState(prevstate => {
      return { nextPage: prevstate.nextPage + 10 };
    });
    this.props.getRecipes(this.state.inputValue, this.state.nextPage);
  };
  toPrevPage = async () => {
    if (this.state.nextPage > 0) {
      await this.setState(prevstate => {
        return { nextPage: prevstate.nextPage - 10 };
      });
      this.props.getRecipes(this.state.inputValue, this.state.nextPage);
    } else {
      console.log('not');
    }
  };
  render() {
    return (
      <>
        {/* <button onClick={this.toNextPage}>click me{this.state.nextPage}</button>
        <button onClick={this.toPrevPage}>prev</button> */}
        <div className={style.position}>
          <form action="" onSubmit={this.onSubmit}>
            <input
              autoComplete="off"
              id={style.searchInput}
              type="text"
              onInput={this.toGetInputValue}
              value={this.state.inputValue}
              placeholder="Type here what you would like to eat today"
            />
            {this.props.isLoading ? (
              <CircularProgress />
            ) : (
              <button className={style.button}>Search</button>
            )}
          </form>
          <div
            style={this.props.recipe ? { height: '' } : { height: '100vh' }}
            className={style.listStyle}
          >
            <ul className={style.listView}>
              {this.props.recipe &&
                this.props.recipe.map((el, inx) => (
                  <li
                    className={style.itemView}
                    key={el.recipe.calories}
                    data={inx}
                    onClick={this.getIndex}
                  >
                    <div className="col s4 m8">
                      <div className="card">
                        <div className="card-image">
                          <img src={el.recipe.image} alt="food" />
                          <span
                            className={['card-title', style.textStyle].join(
                              ' ',
                            )}
                          >
                            {el.recipe.label}
                          </span>
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
                  </li>
                ))}
            </ul>
            <div className={style.buttonStyle}>
              {this.state.nextPage > 0 && (
                <Button onClick={this.toPrevPage} label="back" color="white" />
              )}
            </div>
            <div className={style.buttonStyle}>
              {this.state.inputValue && this.props.recipe && (
                <Button
                  onClick={this.toNextPage}
                  label="Next Page"
                  color="orange"
                />
              )}
            </div>
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
  isLoading: loadingSelectors(state),
});

const mapDispatchToProps = {
  getRecipes: operations,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
