import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggin: false,
    };
  }

  render() {

    this.state.isLoggin && <div>Welcome Xenia</div>

    // 3 approach
    /*
    return(
        this.state.isLoggin ?
        <div>Welcome Xenia</div> : 
        <div>Welcome Guest</div>
    )
    */

    // 2 approach
    /*
    let message;
    if (this.state.isLoggin) {
      message = <div>Welcome Xenia</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>
    */

    // 1 approach
    /*
    if (this.state.isLoggin) {
      return <div>Welcome Xenia</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
    */
  }
}

export default UserGreeting;
