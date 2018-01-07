import React, { Component } from 'react';
import { Route, Switch, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Link } from 'react-router-dom';
import MainPage from './MainPage'

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
            <Route exact path='/' component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
