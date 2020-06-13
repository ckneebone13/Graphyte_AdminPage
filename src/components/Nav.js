import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/assignments" className="nav__link">
            Assignments
          </Link>
        </li>
        <li>
          <Link to="/courses" className="nav__link">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="nav__link">
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/forum" className="nav__link">
            Forum
          </Link>
        </li>
        <li>
          <Link to="/settings" className="nav__link">
            Settings
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
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
`;

export default Nav;
