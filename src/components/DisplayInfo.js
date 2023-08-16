import React from "react";
class DisplayInfo extends React.Component{
  render(){
    const {name, age} = this.props;
    return(
      <div>
        My name is {name}
        <br/>
        age is {age}
      </div>
    )
  }
}
export default DisplayInfo;