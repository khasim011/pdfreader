import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pdf from '../components/pdf'
import '../css/app.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Pdf} />
        </Switch>
      </div>
    );
  }
}

export default AppContainer;
