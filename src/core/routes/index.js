import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Authentication from '../../common/Pages/Authentication';
import Dashboard from '../../common/Pages/Dashboard';
import Intro from '../../common/Pages/Intro';

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/welcome" component={Intro} />
      <Route path="/sign-in" component={Authentication} />
      <PrivateRoute path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
