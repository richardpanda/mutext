import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from './containers/Auth';
import Navbar from './containers/Navbar';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/auth" component={Auth} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
