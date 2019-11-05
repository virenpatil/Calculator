import React, { Component } from 'react';
import { connect } from "react-redux";

import { mode, clear,minus, evaluateExpression, square, squareRoot, calculate } from './store/action/action';
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
    mode : state.mode,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => { dispatch(calculate(buttonKey)); },
    clear: () => { dispatch(clear()); },
    evaluate: () => { dispatch(evaluateExpression()); },
    square: () => { dispatch(square()); },
    squareRoot: () => { dispatch(squareRoot()); },
    minus: () => { dispatch(minus())},
    changeMode: () => { dispatch(mode())}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);