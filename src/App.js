import React, { Component } from 'react';
import Pictures from './components/Pictures';
import SinglePicture from './components/SinglePicture';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Pictures} />
          <Route path="/sort/:id" component={Pictures} />
          <Route path="/single/:id" component={SinglePicture} />
        </Switch>
      </div>
    );
  }
}

export default App;
