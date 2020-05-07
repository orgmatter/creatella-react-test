import React, { Component } from 'react';
import store from './Store';
import { Provider } from 'react-redux';
import Home from './Home/container';
import Documentation from './docs';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

class App extends Component {

  render () {

    return (
      <Provider store={store}>
        <div className="app-container">
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/docs" render={(props) => <Documentation {...props}  />} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
