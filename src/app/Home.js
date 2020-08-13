import React from 'react';
import './home.less';
import CalcIcon from './components/CalcIcon';
import TimerIcon from './components/TimerIcon';

const Home = () => {
  return (<div className="home">
    <div className="home_img">
      <h1>在线实用工具</h1>
    </div>
    <div className="home_href">
      <CalcIcon></CalcIcon>
      <TimerIcon></TimerIcon>  
    </div>
  </div>);
};

export default Home;