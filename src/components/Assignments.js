import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function GroupSizesColors() {
  const classes = useStyles();

  return (
    <Wrapper>
      <div className={classes.root}>
        <Button fullWidth variant="outlined">
          {" "}
          Upcoming Assignments
        </Button>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #1</Button>
          <Button>Due in 20 days</Button>
          <Button>?</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #2</Button>
          <Button>Due in 30 days</Button>
          <Button>?</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #3</Button>
          <Button>Due in 40 days</Button>
          <Button>?</Button>
        </ButtonGroup>

        <Button fullWidth variant="outlined">
          Overdue Assignments
        </Button>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #4</Button>
          <Button>Due in 20 days</Button>
          <Button>?</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #5</Button>
          <Button>Due in 30 days</Button>
          <Button>?</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #6</Button>
          <Button>Due in 40 days</Button>
          <Button>?</Button>
        </ButtonGroup>

        <Button fullWidth variant="outlined">
          Recently Graded Assignments
        </Button>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #7</Button>
          <Button>View Grade</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #8</Button>
          <Button>View Grade</Button>
        </ButtonGroup>
        <ButtonGroup
          fullWidth
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Assignment #9</Button>
          <Button>View Grade</Button>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #4f555b;

  span {
    color: #fff;
    font-size: 15px;
  }

  section {
    color: #fff;
  }
`;
