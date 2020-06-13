import React, { Component } from "react";
// import { Link } from "react-router-dom";

// let course = {};

// let savedProps = {};

// todo make this function return the most recently posted assignemnt for the course
// const findNewAssignment = (assignments = []) => {
//   let checkedAssignments = assignments.filter(
//     (item, index) => assignments[index].posted === false
//   );
//   let nextAssignment = "None Due";
//   let nextTime = "None";
//   for (let i = 0; i < checkedAssignments.length; i++) {
//     if (i === 0) {
//       nextAssignment = checkedAssignments[i];
//       nextTime = new Date(nextAssignment.date).getTime();
//     } else if (nextTime > new Date(checkedAssignments[i].date).getTime()) {
//       nextAssignment = checkedAssignments[i];
//       nextTime = new Date(nextAssignment.date).getTime();
//     }
//   }
//   return nextAssignment;
// };

class CourseFeed extends Component {
  render() {
    return (
      <div className="courseFeed">
        {/* announcements and new assignments appear */}
        {this.props.course.announcements.map(announcement => (
          <li className={announcement} key={announcement}>
            {announcement}
          </li>
        ))}
      </div>
    );
  }
}

export default CourseFeed;
