import React from "react";
class InfoComponent extends React.Component {
  state = {
    name: "",
    address: "Hà Nội",
    Age: "",
  };
  handleOnClick = (event) => {
    this.setState({
      name: "Vu Quang Anh",
    });
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addUser({
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My First Component Name is: {this.state.name}
        <button
          onClick={(event) => {
            this.handleOnClick(event);
          }}
        >
          Click Me
        </button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default InfoComponent;
