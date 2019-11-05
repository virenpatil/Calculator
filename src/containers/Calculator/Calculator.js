import React, { Component } from 'react';

import Result from '../../components/Result/Result';
import Screen from '../../components/Screen/Screen';
import Scimode from '../../components/Scimode/Scimode';

class Calculator extends Component {
    render() {
        
        
        return (
            <div className="calculator">
                <Result {...this.props}/>
                <Scimode {...this.props}/>
                <Screen {...this.props}/>
            </div>
        )
    }
}

export default Calculator;