import React from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";

moment.locale("en-GB");

// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const localizer = momentLocalizer(moment);

function Calendar2() {
  return (
    <Wrapper>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #aaa;
  padding: 20px;

  .rbc-month-row {
    overflow: visible;
  }
  .rbc-row {
    height: 100px;
  }
  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Calendar2;
