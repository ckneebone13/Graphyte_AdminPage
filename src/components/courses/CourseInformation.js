import React, { Component } from "react";
import { default as buttons } from "../../layouts/CourseButtons.json";
import VerticalButtons from "../VerticalButtons";
import CourseFeed from "./CourseFeed";

let course = {};

class CourseInformation extends Component {
  constructor(props) {
    super(props);
    course = props.course;
  }

  render() {
    return (
      <div className="courseinformation">
        {/* <div className="courseInfoButtons"> */}
        <VerticalButtons className="courseOptions" buttons={buttons.buttons} />
        <CourseFeed course={course} />
        {/* </div> */}
        {/* <div className="div3"> what</div> */}
        {/* <div class="div4">a </div>
        <div class="div5">a </div>
        <div class="div6">a </div>
        <div class="div7">a </div>
        <div class="div8">a </div>
        <div class="div9">a </div>
        <div class="div10">a </div>
        <div class="div11">a </div>
        <div class="div12">a </div> */}
      </div>
    );
  }
}

export default CourseInformation;
