import React, { Component } from 'react'

class CalcBtnRow extends Component {
   render() {
    const {cName, clickHandle} = this.props
    const {btn1, btn2, btn3} = this.props.btnList
    return(
        <div className={"btn_row_" + cName}>
            <button className={"btn_" + btn1} onClick={() => clickHandle(btn1)}>{btn1}</button>
            <button className={"btn_" + btn2} onClick={() => clickHandle(btn2)}>{btn2}</button>
            <button className={"btn_" + btn3} onClick={() => clickHandle(btn3)}>{btn3}</button>
        </div>
    )
   }
}
export default CalcBtnRow;