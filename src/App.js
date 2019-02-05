import React, { Component } from 'react';
import Pictures from './components/Pictures';
import { Switch, Route } from 'react-router-dom';
import Sort from './components/Sort';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          <h1>SSR gallery</h1>
          <Sort />
        </div>

        <Switch>
          <Route path="/" exact component={Pictures} />
          <Route path="/sort/:id" component={Pictures} />
        </Switch>
      </div>
    );
  }
}

export default App;
