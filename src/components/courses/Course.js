import React, { Component } from "react";
import CourseBanner from "./CourseBanner";
import { CoursesAPI } from "./AllCourses";
import AssignmentBox from "./AssignmentBox";
import CourseDetails from "./CourseDetails";
import CourseInformation from "./CourseInformation";
import styled from "styled-components";

let course = {};

class Course extends Component {
  constructor(props) {
    super(props);
    course = CoursesAPI.get(parseInt(props.match.params.number, 10));
  }

  render() {
    return (
      <Wrapper>
        <div className="course">
          <CourseBanner courseName={course.name} />
          <CourseDetails course={course} />
          <CourseInformation course={course} />
          <AssignmentBox course={course} />
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
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* height: 50px; */
  /* display: flex; */
  /* align-items: center; */
  /* min-height: calc(100vh - 50px); */

  .nav {
    grid-area: 1 / 1 / 2 / 27;

    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    ul {
      display: inline-block;
      width: 100%;
      padding: 0;
      text-align: center;
    }

    li {
      display: inline-block;
      margin-left: 20px;

      a {
        text-decoration: none;
        font-size: 20px;
        color: #333;
      }
    }
  }

  .course {
    display: grid;
    grid-area: 2 / 1 / 13 / 27;
    grid-template-rows:
      0.05fr 0.5fr 0.3fr 0.25fr repeat(5, 0.4fr) repeat(2, 0.25fr)
      1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    outline: #fff solid 1px;
  }
  .banner {
    grid-area: 2 / 1 / 3 / 26;
    background-color: rgb(42, 52, 57);
    outline: #4caf50 solid 1px;
    color: #fff;
    text-align: center;
    font-size: 200%;
  }

  .coursedetails {
    grid-area: 3 / 2 / 10 / 9;
    color: #fff;
    outline: #4caf50 solid 1px;
    list-style: none;
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .courseinformation {
    display: grid;
    grid-area: 3 / 10 / 12 / 25;
    grid-template-rows: 0.1fr repeat(7, 0.5fr) 0.1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;

    .courseOptions {
      grid-area: 1 / 1 / 10;
      justify-content: center;
      display: inline-flex;
      flex-direction: column;
      li {
        a {
          color: #ffffff;
          text-decoration: none;
          display: inherit;
        }
        a:hover {
          background-color: black;
        }
        list-style: none;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        border: 1px solid #fff;
        width: 100%;
        padding: 3% 0px;
      }
    }

    .courseFeed {
      grid-area: 1 / 2 / 10;
      color: #fff;
      outline: #4caf50 solid 1px;
      list-style: none;
      justify-content: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      /* justify-content: center; */
      /* padding: 0; */
    }
  }

  .assignmentbox {
    grid-area: 10 / 2 / 12 / 9;
    color: #fff;
    outline: #4caf50 solid 1px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Course;
