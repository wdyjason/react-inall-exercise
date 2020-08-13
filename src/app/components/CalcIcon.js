import React from 'react'

const CalcIcon = () => {
    return(
        <div className='home_calc_icon'>
            <img src={require('../../images/calculator.png')} alt="error"/> 
            <a href="/calculator">计算器</a>   
        </div>
    )
}
export default CalcIcon;