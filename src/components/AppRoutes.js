import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '~/views/Home'
import Projetos from '~/views/Projetos'

const AppRoutes = () => (
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projetos} />
   </Switch>
)

export default AppRoutes
