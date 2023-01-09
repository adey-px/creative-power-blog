import React, { Component } from "react";

//
export class AdminNav extends Component {
  //
  render() {
    return <div id="admin-page">{this.props.children}</div>;
  }
}

export default AdminNav;
