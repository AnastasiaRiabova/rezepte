import { Component } from "react";

export class SearchForm extends Component {
  state = {
    inputValue: "",
  };

  toGetInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputValue);
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

export default SearchForm;
