import React, { Component } from 'react';
import store from './Store';
import { Provider } from 'react-redux';
import Home from './Home/container';
import './App.scss';

class App extends Component {

  render () {

    return (
      <Provider store={store}>
        <div className="app-container">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
