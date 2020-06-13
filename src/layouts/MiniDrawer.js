import React from 'react'
import clsx from 'clsx'
import {NavLink} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import SvgIcon from '@material-ui/icons/Menu'
import ListIcon from '@material-ui/icons/List'
import TodayIcon from '@material-ui/icons/Today'
import ForumIcon from '@material-ui/icons/Forum'
import SettingsIcon from '@material-ui/icons/Settings'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ClassIcon from '@material-ui/icons/Class'
import AppsIcon from '@material-ui/icons/Apps'

import Container from '../components/Container'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    marginLeft: theme.spacing(7) + 1,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const nav_list_item = (item, index) => (
  <ListItem
    button
    key={item.title}
    component={NavLink}
    to={item.link}
    activeStyle={{background: '#6dc971'}}
    exact={true}
  >
    <ListItemIcon>
      <SvgIcon component={item.icon} />
    </ListItemIcon>
    <ListItemText primary={item.title} />
  </ListItem>
)

const nl = {
  home: {title: 'Home', link: '/', icon: HomeIcon},
  courses: {title: 'Courses', link: '/courses', icon: ListIcon},
  calendar: {title: 'Forum', link: '/forum', icon: ForumIcon},
  assignments: {
    title: 'Assignments',
    link: '/assignments',
    icon: AssignmentIcon,
  },
  settings: {title: 'Settings', link: '/settings', icon: SettingsIcon},

  managePeople: {
    title: 'Manage People',
    link: '/manage-people',
    icon: PeopleAltIcon,
  },
  manageCourses: {
    title: 'Manage Courses',
    link: '/manage-courses',
    icon: ClassIcon,
  },
  manageFeatures: {
    title: 'Manage Features',
    link: '/manage-features',
    icon: AppsIcon,
  },
  adminHome: {
    title: 'Home',
    link: '/admin',
    icon: HomeIcon,
  },
}

export default function MiniDrawer(props) {
  var nav_links = []
  switch (props.user) {
    case 'parent':
      nav_links = [nl.home, nl.calendar, nl.assignments]
      break
    default:
    case 'student':
      nav_links = [nl.home, nl.courses, nl.calendar, nl.assignments]
      break
    case 'admin':
      nav_links = [
        nl.adminHome,
        nl.managePeople,
        nl.manageCourses,
        nl.manageFeatures,
      ]
      break
    case 'teacher':
      nav_links = [nl.home, nl.calendar, nl.courses, nl.assignments]
      break
  }

  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleToggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div>
      <CssBaseline />
      <div className={classes.DrawerClosed}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
        >
          <List>
            {nav_links.map((item, index) => nav_list_item(item, index))}
          </List>
          <Divider />
          {nav_list_item(nl.settings, 0)}
        </Drawer>
      </div>
      <main className={classes.content}>
        <Container />
      </main>
    </div>
  )
}
