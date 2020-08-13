import React from 'react'

const TimerIcon = () => {
    return(
        <div className='home_timer_icon'>
            <img src={require('../../images/timer.png')} alt="error"/> 
            <a href="/timer">倒计时器</a>
        </div>
    )
}
export default TimerIcon;