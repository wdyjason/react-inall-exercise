import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from './components/Calculator';
import Timer  from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div className="app_header">
          <Link to='/timer'>在线计时器</Link>
          <Link to='/calculator'>在线计算器</Link>
          <Link to='/'>HOME</Link>
        </div>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/timer' component={Timer}/>
          <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
