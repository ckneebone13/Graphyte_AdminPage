import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function CourseCard(course) {
  const classes = useStyles()
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {course.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {course.professor.name}
        </Typography>
        <Typography variant="body2" component="p">
          You have {course.assignments.length} assignments. <br />{' '}
          {course.meetings.length} meetings upcoming.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/courses/${course.number}`}>
          Open Class
        </Button>
      </CardActions>
    </Card>
  )
}

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const CoursesAPI = {
  courses: [
    {
      number: 1,
      name: 'Software Engineering',
      professor: {
        name: 'David Vineyard',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        {
          date: 'May 19, 2020 23:59:99',
          posted: 'May 18, 2020 23:59:99',
          name: 'assignment3',
          submitted: false,
        },
        {
          date: 'May 17, 2020 23:59:99',
          posted: 'May 16, 2020 23:59:99',
          name: 'assignment2',
          submitted: false,
        },
        {
          date: 'May 16, 2020 23:59:99',
          posted: 'May 14, 2020 23:59:99',
          name: 'assignment1',
          submitted: true,
        },
      ],
      meetings: [
        {
          date: 'May 17, 2020 16:00:00',
        },
        {
          date: 'May 18, 2020 16:00:00',
        },
      ],
      announcements: ['hopefully things are cool', 'everyone stay safe'],
    },
    {
      number: 2,
      name: 'Computer Architecture',
      professor: {
        name: 'Nozar Tabrizi',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        // { date: "2020-05-17", name: "assignment1", submitted: true }
      ],
      meetings: [],
      announcements: ['hopefully', 'everyone'],
    },
    {
      number: 3,
      name: 'Artificial Intelligence',
      professor: {
        name: 'David Vineyard',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        {
          date: 'May 19, 2020 23:59:99',
          posted: 'May 18, 2020 23:59:99',
          name: 'assignment3',
          submitted: false,
        },
        {
          date: 'May 17, 2020 23:59:99',
          posted: 'May 16, 2020 23:59:99',
          name: 'assignment2',
          submitted: false,
        },
        {
          date: 'May 16, 2020 23:59:99',
          posted: 'May 14, 2020 23:59:99',
          name: 'assignment1',
          submitted: true,
        },
      ],
      meetings: [
        {
          date: 'May 17, 2020 16:00:00',
        },
        {
          date: 'May 18, 2020 16:00:00',
        },
      ],
      announcements: ['hopefully things are cool', 'everyone stay safe'],
    },
  ],
  all: function() {
    return this.courses
  },
  get: function(id) {
    const isCourse = p => p.number === id
    return this.courses.find(isCourse)
  },
}

// The AllCourses iterates over all of the courses and creates
// a link to their profile page.
const AllCourses = () => (
  <div className="allcourses">
    {CoursesAPI.all().map(course => CourseCard(course))}
  </div>
)

export {AllCourses, CoursesAPI}
