import React, { Component } from 'react';

import Result from '../../components/Result/Result';
import Screen from '../../components/Screen/Screen';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Result {...this.props}/>
                <Screen {...this.props}/>
            </div>
        )
    }
}

export default Calculator;