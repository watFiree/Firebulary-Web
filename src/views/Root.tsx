import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import WithAuth from 'components/WithAuth';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
import App from './App';
import Dictionary from './Dictionary';
import Learn from './Learn';
import Settings from './Settings';

const Root = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact default path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <WithAuth>
            <Route exact path="/app" component={App} />
            <Route exact path="/dictionary" component={Dictionary} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/settings" component={Settings} />
          </WithAuth>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Root;
