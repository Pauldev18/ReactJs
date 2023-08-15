import React from "react";
class MyComponent extends React.Component{
  state = {
    name : "Paul dev",
    address: "Hà Nội"
  }
  render(){
    return(
      <div>
        My First Component
        Name is: {this.state.name}
      </div>
    )
  }
}
export default MyComponent;