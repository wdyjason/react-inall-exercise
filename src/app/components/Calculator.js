import React, { Component } from 'react';
import CalcBtnRow from './CalcBtnRow';
import {Link} from "react-router-dom";
import './Calculator.less'

const btnData=[
    {row:1, btnList:{btn1:'+', btn2:'-', btn3: 'x'}},
    {row:2, btnList:{btn1:'7', btn2:'8', btn3: '9'}},
    {row:3, btnList:{btn1:'4', btn2:'5', btn3: '6'}},
    {row:4, btnList:{btn1:'1', btn2:'2', btn3: '3'}},
    {row:5, btnList:{btn1:'0', btn2:'Clear', btn3: '='}},
]

class Calculator extends Component {
    state = {
        displayVal:'',
        hasResult:false,
    };

    btnClickHandle = (val) => {
        if (val === "=") {
            this.calcResult()
            return
        };
        if (val === "Clear") {
            this.clearAll()
            return
        };
        this.setField("displayVal", this.state.displayVal + val);
    }

    calcResult = () => {
        const {displayVal} = this.state;
        const pattern = new RegExp('^[0-9]*[+ | \- | x][0-9]*$');
        if (!pattern.test(displayVal)) {
            this.clearAll()
            return
        }

        let twoNum=displayVal.split(/[-+x]/)
        let operator=displayVal.match(/[-+x]/)

        let result = this.switchCalc(twoNum[0], twoNum[1], operator[0]);
        this.setState({
            displayVal: displayVal + "=" + result,
            hasResult: true
        })
    }

    switchCalc = (val1, val2 , operator) => {
        const num1 =Number(val1)
        const num2 =Number(val2)
        console.log(operator)
        if (operator === "+") return num1 + num2;
        if (operator === "-") return num1 - num2;
        if (operator === "x") return num1 * num2;
        return "Nan"
    } 

    clearAll = () => {
        this.setState({
            displayVal:'',
            hasResult:false,
        })
    }

    setField = (field, val) => {
        this.setState({
            [field]:val
        })
    }

    render() {
        return(
            <div className="calc_all">
                <h1>在线计算器</h1>
                <div className="calc_main">
                <input type="text" value={this.state.displayVal} readOnly={true}></input>
                {
                    btnData.map(e => {
                        return <CalcBtnRow key={"row_key_" + e.row} cName={e.row} btnList={e.btnList} clickHandle={this.btnClickHandle}></CalcBtnRow>
                    })
                }
                </div>
                <Link to="/">回到主页</Link>
            </div>
        )
    }

}
export default Calculator;