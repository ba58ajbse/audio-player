import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ProjectCreate from './components/ProjectCreate'
import Main from './components/Main'

const Router: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/project-create" component={ProjectCreate} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
