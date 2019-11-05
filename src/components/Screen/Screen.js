import React, { Component } from 'react';

import './Screen.css';

import Button from '../Button/Button';
import { keypadKeys } from '../../utils/BasicMode';

export default class Screan extends Component {
  handleClick = key => {
    switch (key) {
      case "c":
        this.props.clear();
        break;
      case "=":
        this.props.evaluate();
        break;    
      default:
        this.props.calculate(key);
        break;
    }
  };

  render() {
    return (
      <div className="keypad">
        {keypadKeys.map((block, index) => {
          return (
            <div key={index} className="block">
              {block.map(key => (
                <Button
                  key={key}
                  onButtonClick={this.handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}