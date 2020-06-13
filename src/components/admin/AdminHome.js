import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import VerticalButtons from '../VerticalButtons'
import {default as buttons} from '../../layouts/AdminButtons.json'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {},

  card: {
    paddingBottom: '15px',
  },

  buttoncontainer: {
    marginTop: '15px',
    width: '100%',
  },

  button: {
    marginLeft: '5px',
    float: 'right',
  },
}))

function AdminHome() {
  return (
    <Wrapper>
      <section>
        <strong>Graphyte Admin</strong>
        <div>
          <rainbow>Warning! You are in adminstrative mode!</rainbow>
          <blockquote>
            “With great power, comes great responsibility.”
          </blockquote>
        </div>
      </section>
    </Wrapper>
    //<Switch>
    //<Route exact path="/"/>
    //<Route path="/courses/:number" />
    //</Switch>
  )
}

const Wrapper = styled.div`
  grid-area: 2 / 1 / 13 / 27;
  min-height: calc(100vh - 50px);
  backgroundColor: theme.palette.background.paper,

  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  
  strong{
    color: #f5f5f5;
    font-size: 20px;
    text-align: center;
  }

  header {
    color: #F42;
    font-size: 35px;
    text-align: center;
  }

  rainbow {
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 40px;
    text-align: center;
  }

  blockquote {
    text-align: center;
    font-style: italic;
  }

  section {
    color: #fff;
  }

  div {
    color: #fff;
    align-items: center;
    text-align: center;
  }
`

export default AdminHome
