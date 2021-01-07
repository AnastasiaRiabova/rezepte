import { Component } from "react";
import { connect } from "react-redux";
import operations from "../../Redux/Recipe/recipe-operations";

export class SearchForm extends Component {
  state = {
    inputValue: "",
  };

  toGetInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.getRecipes(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            onInput={this.toGetInputValue}
            value={this.state.inputValue}
          />
          <p>{this.state.inputValue}</p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   value: state.timer,
// });

const mapDispatchToProps = {
  getRecipes: operations,
};

export default connect(null, mapDispatchToProps)(SearchForm);
