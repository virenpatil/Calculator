import * as types from '../types';

export const calculate = (key) => {
    console.log('[Action] = calculate -->  ', key);
  return {
    type: types.SET_EXPRESSION,
    payload: key
  }
}

export const addition = () => {
    console.log('[Action] = Addition -->  ');
    return {
        type: types.ADDITION
    }
}
export const subtraction = () => {
    console.log('[Action] = Subtraction -->  ');
    return {
        type: types.SUBTRACTION
    }
}
export const multification = () => {
    console.log('[Action] = Multification -->  ');
    return {
        type: types.MULTIFICATION
    }
}
export const division = () => {
    console.log('[Action] = division -->  ');
    return {
        type: types.DIVISION
    }
}

export const clear = () => {
    console.log('[Action] = clear -->  ');
    return {
        type: types.CLEAR
    }
}
export const square = () => {
    console.log('[Action] = squar -->  ');
    return {
        type: types.SQUARE
    }
}
export const squareRoot = () => {
    console.log('[Action] = squareRoot -->  ');
    return {
        type: types.SQUARE_ROOT
    }
}
export const evaluateExpression = () => {
    console.log('[Action] = evaluateExpression -->  ');
    return {
        type: types.EVALUATE_EXPRESSION
    }
}