import React from "react";
import InfoComponent from "./InfoComponent";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component{
  state={
    listUsers : [
      {
        id:1,
        name: "user1",
        age: 20
      },
      {
        id:2,
        name: "user2",
        age: 30
      }
    ]
  }
  render(){
    return(
      <div>
       <InfoComponent></InfoComponent>
       <hr></hr>
       <DisplayInfo listUsers = {this.state.listUsers}/>
      </div>
    )
  }
}
export default MyComponent;