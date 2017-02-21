import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Root from './component/Root';
import Home from './component/Home/Home';
import Artist from './component/Artist/Artist';
import Reddit from './component/Reddit/Reddit';
import About from './component/About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"/"} component={Root} >
              <IndexRoute component={Home} />
              <Route path={"home"} component={Home} />
              <Route path={"reddit"} component={Reddit} />
              <Route path={"about"} component={About} />
              <Route path={"artist/:id"} component={Artist} />
          </Route>
          <Route path={"home-single"} component={Home}/>
      </Router>
    );
  }e
}

export default App;
