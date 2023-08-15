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
  render(){
    return(
      <div>
        My First Component
        Name is: {this.state.name}
        <button onClick={(event) => {this.handleOnClick(event)}}>Click Me</button>
      </div>
    )
  }
}
export default MyComponent;