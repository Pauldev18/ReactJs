import React from "react";
import InfoComponent from "./InfoComponent";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "user1",
        age: 20,
      },
      {
        id: 2,
        name: "user2",
        age: 30,
      },
    ],
  };
  addUser = (objNew) => {
    this.setState({
      listUsers: [objNew, ...this.state.listUsers],
    });
  };
  deleleUser = (userId) =>{
    let listUsers = this.state.listUsers;
    listUsers = listUsers.filter(item => item.id !== userId)
    this.setState({
       listUsers: listUsers
    })
  };
  render() {
    return (
      <div>
        <InfoComponent addUser={this.addUser}></InfoComponent>
        <hr></hr>
        <DisplayInfo listUsers={this.state.listUsers}
         deleteUser = {this.deleleUser} />
      </div>
    );
  }
}
export default MyComponent;
