import React, { Component } from 'react';
import { connect } from "react-redux";

import { clear, addition, subtraction, multification, division, evaluateExpression, square, squareRoot, calculate } from './store/action/action';
import Calculator from './containers/Calculator/Calculator';


import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator {...this.props} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    expression: state.expression,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => { dispatch(calculate(buttonKey)); },
    clear: () => { dispatch(clear()); },
    evaluate: () => { dispatch(evaluateExpression()); },
    add: () => { dispatch(addition()); },
    sub: () => { dispatch(subtraction()); },
    mul: () => { dispatch(multification()); },
    div: () => { dispatch(division()); },
    square: () => { dispatch(square()); },
    squareRoot: () => { dispatch(squareRoot()); }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);