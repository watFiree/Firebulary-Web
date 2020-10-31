import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
import App from './App';
import Dictionary from './Dictionary';
import Learn from './Learn';

import useRealtimeData from 'hooks/useRealtimeData';

const Root = () => {
  useRealtimeData();
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact default path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/app" component={App} />
          <Route exact path="/dictionary" component={Dictionary} />
          <Route exact path="/learn" component={Learn} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Root;
