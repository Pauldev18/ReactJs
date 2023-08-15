import React from "react";
class MyComponent extends React.Component{
  state = {
    name : "Paul dev",
    address: "Hà Nội"
  }
  handleOnClick = (event) =>{
    this.setState({
      name: "Vu Quang Anh"
    })
  }

  handleOnChange = (event) =>{
    this.setState({
      name : event.target.value
    })
  }
  handleOnSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);

  }
  render(){
    return(
      <div>
        My First Component
        Name is: {this.state.name}
        <button onClick={(event) => {this.handleOnClick(event)}}>Click Me</button>
        <form onSubmit={(event) =>{this.handleOnSubmit(event)}}>
          <input type="text" onChange={(event) => {this.handleOnChange(event)}}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default MyComponent;