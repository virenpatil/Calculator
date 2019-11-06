import React, { Component } from 'react';

import Button from '../Button/Button';

import './Scimode.css';

export default class Scimode extends Component {
    kays = ['Basic', 'x^2', '√', '-'];

    handleClick = k => {
        switch (k) {
            case "x^2":
                this.props.square();
                break;
            case "√":
                this.props.squareRoot();
                break;
            case "-":
                this.props.minus();
                break;
            case "Basic":
                this.props.changeMode();
        }
    };


    render() {
        let display = < Button
            key={'SciMode'}
            onButtonClick={() => {
                this.props.changeMode();
            }}
            buttonKey={'Sci'}
        />;
        console.log('mode -->', this.props.mode);
        if (this.props.mode !== 'basic') {
            display = this.kays.map(key => (
                < Button
                    key={key}
                    onButtonClick={this.handleClick}
                    buttonKey={key}
                />
            ))
        }


        return (
            <div className="sci-mode-btn">
                {display}
            </div>
        );
    }

}