import React from "react";

import { Switch, Route } from "react-router-dom";
import { AllCourses } from "./AllCourses";
import Course from "./Course";

const Courses = () => (
  <Switch>
    <Route exact path="/courses" component={AllCourses} />
    <Route path="/courses/:number" component={Course} />
  </Switch>
);

export default Courses;
