import React, { Component } from "react";

let courseName = "";

class CourseBanner extends Component {
  constructor(props) {
    super(props);
    courseName = props.courseName;
  }

  componentDidMount() {
    setTimeout(() => {
      // Do something after 300ms (animate an element, etc)
    }, 300);
  }

  render() {
    return <div className="banner">{courseName}</div>;
  }
}

export default CourseBanner;
