import React, { Component } from "react";

let course = {};

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    course = props.course;
    course.meetings.forEach(function(meeting, i) {
      course.meetings[i].date = new Date(meeting.date).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
    });
  }

  render() {
    return (
      <ul className="coursedetails">
        <li className={course.professor.name} key={course.professor.name}>
          Professor: {course.professor.name}
        </li>
        <li className={course.professor.email} key={course.professor.email}>
          {course.professor.email}
        </li>
        <li className={course.professor.phone} key={course.professor.phone}>
          {course.professor.phone}
        </li>
        {course.meetings.map(meeting => (
          <li className={meeting.date} key={meeting.date}>
            Meeting: {meeting.date}
          </li>
        ))}
      </ul>
    );
  }
}

export default CourseDetails;
