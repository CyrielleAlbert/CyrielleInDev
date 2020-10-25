import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Writings from "./Pages/Writings.js"
import Projects from './Pages/Projects'
import TelegramBot from './Pages/Projects/TelegramBot.jsx'

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Projects" component={Projects} />
            <Route path="/Blog" component={Writings} />
            <Route path="/Project-TelegramBot" component={TelegramBot}/>
            
          </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
