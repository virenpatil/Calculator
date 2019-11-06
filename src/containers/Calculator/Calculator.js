import React, { Component } from 'react';

import Result from '../../components/Result/Result';
import Screen from '../../components/Screen/Screen';
import Scimode from '../../components/Scimode/Scimode';

import './Calculator.css';

class Calculator extends Component {
    render() {
        
        
        return (
            <div className="calculator-board">
                <h3>Calculator Using React-Redux</h3>
                <Result {...this.props}/>
                <Scimode {...this.props}/>
                <Screen {...this.props}/>
            </div>
        )
    }
}

export default Calculator;