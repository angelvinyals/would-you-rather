import React, { Component } from "react";
import View from "./View";
import _getUsers from "../../_DATA";

class Public extends Component {
  state = {
    loading: true,
  }

  render() {
    return(
      <div>
        <h3>this is public</h3>
        <View {...this.props} {...this.state} />;
      </div>
    )
  }
}

export default Public
