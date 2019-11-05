import * as types from '../types';

export const calculate = (key) => {
  return {
    type: types.ADDITION,
    payload: key
  }
}

export const addition = () => {
    return {
        type: types.ADDITION
    }
}
export const subtraction = () => {
    return {
        type: types.SUBTRACTION
    }
}
export const multification = () => {
    return {
        type: types.MULTIFICATION
    }
}
export const division = () => {
    return {
        type: types.DIVISION
    }
}

export const clear = () => {
    return {
        type: types.CLEAR
    }
}
export const square = () => {
    return {
        type: types.SQUARE
    }
}
export const squareRoot = () => {
    return {
        type: types.SQUARE_ROOT
    }
}
export const evaluateExpression = () => {
    return {
        type: types.EVALUATE_EXPRESSION
    }
}