import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './home'

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Pages
