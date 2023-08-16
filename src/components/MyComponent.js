import React from "react";
import InfoComponent from "./InfoComponent";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component{
  render(){
    return(
      <div>
       <InfoComponent></InfoComponent>
       <hr></hr>
       <DisplayInfo name= "props" age = {20}/>
      </div>
    )
  }
}
export default MyComponent;