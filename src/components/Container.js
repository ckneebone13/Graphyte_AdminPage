import React from 'react'
import styled from 'styled-components'
import {Switch, Route, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Home from './Home'
import Calendar from './calendar/Calendar'
import Settings from './Settings'
import Forum from './Forum'
import Courses from './courses/Courses'
import Assignments from './Assignments'
import Admin from './admin/AdminHome'
import ManagePeople from './admin/ManagePeople'
import ManageCourses from './admin/ManageCourses'
import ManageFeatures from './admin/ManageFeatures'

function Container({location}) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{enter: 300, exit: 300}}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/courses" component={Courses} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/settings" component={Settings} />
              <Route path="/forum" component={Forum} />
              <Route path="/assignments" component={Assignments} />
              <Route path="/admin" component={Admin} />
              <Route path="/manage-people" component={ManagePeople} />
              <Route path="/manage-courses" component={ManageCourses} />
              <Route path="/manage-features" component={ManageFeatures} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  /* .parent {
    display: grid;
    grid-template-columns: repeat(26, 1fr);
    grid-template-rows:
      0.75fr 2fr 0.3fr 0.25fr repeat(5, 0.4fr) repeat(2, 0.25fr)
      1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  } */
`

export default withRouter(Container)
