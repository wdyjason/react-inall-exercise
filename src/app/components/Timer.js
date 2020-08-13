import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./TimerStyle.less"
class Timer extends Component {
    state = {
        time: "Start",
        btnDisable:false,
        end: false,
        allTime:0,
        previousTime:0
    }

    startTimer = () => {
        if (this.state.time === "start" || this.state.time === 0) return 
        this.setState({
            btnDisable:true,
            end:false,
            previousTime:this.state.allTime
        })
    }

    countTime = () => {
        if (!this.state.btnDisable || this.state.allTime < 1) return
        console.log('count-1')
        this.setState({
            time:this.state.allTime + "Seconds",
            allTime: this.state.allTime - 1
        })
        console.log('count-1 ' + this.state.allTime)
        console.log('count-1' + this.state.time)
        if (this.state.allTime === 0) {
            // clearInterval();
            this.setState({
                end:true,
                btnDisable:false,
                previousTime:0
            })
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.countTime();
        }, 1000)
    }

    setTotTime = (event) => {
        this.setState({
            allTime: Number(event.target.value)
        })
    }

    render() {
        const {time, btnDisable, end, allTime, previousTime} = this.state;
        return(
            <div className="timer_all">
                <h1>在线倒计时器</h1>
                <div className="timer_main">
                    <div className="timer_left">
                        <div className="timer_set_up">
                            <label className="timer_input_label" >设置时间</label>
                            <input className="timer_input" type="text" value={btnDisable?previousTime:allTime} onChange={this.setTotTime} readOnly={btnDisable}></input>    
                        </div>
                        <div className="timer_start_btn">
                            <button onClick={this.startTimer} disabled={btnDisable}>Start</button>
                        </div>
                    </div>
                    <div className="timer_display">
                        <p className="timer_display_content">{end?"End":time}</p>
                    </div>
                </div>
                <Link to="/">回到主页</Link>
            </div>
        )
    }
}
export default Timer;