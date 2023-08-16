import React from "react";
class DisplayInfo extends React.Component {
  state = {
    isCheck: true,
  };

  showHidden = () => {
    this.setState({
      isCheck: !this.state.isCheck,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.showHidden();
            }}
          >
            {this.state.isCheck === true ? "Ẩn List" : "Hiện List"}
          </span>
        </div>
        <hr />
        {this.state.isCheck && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                  name: {user.name}
                  <br />
                  age: {user.age}
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
