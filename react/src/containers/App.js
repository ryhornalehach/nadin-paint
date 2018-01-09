import React, { Component } from 'react';
import { Route, Switch, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Link } from 'react-router-dom';
import Gallery from './Gallery'
import Showroom from './Showroom'

const history = createBrowserHistory();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/gallery/:id' component={Showroom} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
