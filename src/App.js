import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Writings from "./Pages/Writings.js"
import Projects from './Pages/Projects'
import Articles from './Pages/Articles/Articles'
import Project from './Pages/Projects/Project'
class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/blog/:id" component={Articles}/>
            <Route path="/projects/:id" component={Project}/>
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Writings} />

          </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
