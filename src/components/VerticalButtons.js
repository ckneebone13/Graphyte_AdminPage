import React, { Component } from "react";
import { Link } from "react-router-dom";

// let course = {};

// let savedProps = {};

class VerticalButtons extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.buttons.map(button => (
          <li
            className={this.props.orientation}
            key={this.props.className + button}
          >
            <Link to={`/${button}`}>{button}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default VerticalButtons;
