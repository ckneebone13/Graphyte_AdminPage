import React, { Component } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import "../global-styles";

class DefaultLayout extends Component {
  render() {
    return (
      <div className="parent">
        <div className="nav">
          <Nav />
        </div>
        <Container />
      </div>
    );
  }
}
export default DefaultLayout;
