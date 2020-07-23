import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminTemplate extends Component {
  render() {
    return (
      <div className="d-flex ">
        <div className="w-25 bg-dark text-light">
          <p  >Sidebar</p>
          <Link className="d-block text-light" to="/user-management">User</Link>
          <Link className="d-block text-light" to="/courses-management">Courses</Link>
        </div>
        <div className="w-75 bg-success">{this.props.children}</div>
      </div>
    );
  }
}
