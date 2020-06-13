import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import VerticalButtons from '../VerticalButtons'
import {default as buttons} from '../../layouts/AdminButtons.json'
import UniversityAPI from '../../api/university'
import GridListTile from '@material-ui/core/GridListTile'
import CardActionArea from '@material-ui/core/CardActionArea'
import DeleteIcon from '@material-ui/icons/Delete'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden', //auto
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

function ManagePeople() {
  const classes = useStyles()

  return (
    <div>
      <GridList className={classes.gridList} cols={3 || 2}>
        {UniversityAPI.all().map(user => (
          <GridListTile key={user.id} className={classes.card} cols={1}>
            {PersonCard(user)}
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

function PersonCard(person) {
  const classes = useStyles()
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {person.name}
        </Typography>
        <Typography variant="h6" component="h2">
          Username: {person.username}
        </Typography>
        <Typography variant="h6" component="h2">
          ID: {person.id}
        </Typography>
        <div className={classes.buttoncontainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </CardContent>
      <CardActions />
    </Card>
  )
}

export default ManagePeople
