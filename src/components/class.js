import React, { Component } from "react";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
     
        //  name: "kim", age: 20 
     
    //    test: [
    //         { id: 1123, name: "렌트비", age: 1000 },
    //         { id: 4122, name: "교통비", age: 2000 },
    //         { id: 5433, name: "식비", age 3000 },
    //       ],
      peoples: [
        { name: "kim", age: 20 },
        { name: "yun", age: 10 }
      ],
    };
  }

  render() {
    console.log(this.state.peoples)

    return (
      <>
        <button onClick={() => this.setState({ age: 1000 })}>test</button>
        <div>클래스test{this.state.peoples.name}</div>
        <div>클래스test{this.state.peoples.age} </div>

      </>
    );
  }
}

export default Modal;
