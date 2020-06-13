import React, { Component } from "react";

let course = {};

const findNextAssignment = (assignments = []) => {
  let checkedAssignments = assignments.filter(
    (item, index) => assignments[index].submitted === false
  );
  let nextAssignment = "None Due";
  let nextTime = "None";
  for (let i = 0; i < checkedAssignments.length; i++) {
    if (i === 0) {
      nextAssignment = checkedAssignments[i];
      nextTime = new Date(nextAssignment.date).getTime();
    } else if (nextTime > new Date(checkedAssignments[i].date).getTime()) {
      nextAssignment = checkedAssignments[i];
      nextTime = new Date(nextAssignment.date).getTime();
    }
  }
  return nextAssignment;
};

class AssignmentBox extends Component {
  constructor(props) {
    super(props);
    course = props.course;
  }

  render() {
    let nextAssignment = findNextAssignment(course.assignments);
    if (nextAssignment === "None Due") {
      return <div className="assignmentbox center"> {nextAssignment} </div>;
    }
    return <div className="assignmentbox center"> {nextAssignment.name}</div>;
  }
}

export default AssignmentBox;
