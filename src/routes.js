import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

export const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  )
}
