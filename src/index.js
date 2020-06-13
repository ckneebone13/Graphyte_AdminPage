import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import ScrollToTop from './utils/ScrollToTop'
import DefaultLayout from './layouts/DefaultLayout'
import MiniDrawer from './layouts/MiniDrawer'
import './global-styles'

const supportsHistory = 'pushState' in window.history

const App = () => (
  <Router forceRefresh={!supportsHistory}>
    <ScrollToTop>
      <MiniDrawer user="admin" />
    </ScrollToTop>
  </Router>
)

render(<App />, document.getElementById('root'))
