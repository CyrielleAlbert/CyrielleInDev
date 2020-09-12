import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
