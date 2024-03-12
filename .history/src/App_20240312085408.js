import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Roster from './Roster';
import Force from './Force';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/force" component={Force} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;