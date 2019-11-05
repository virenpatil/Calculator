import * as types from '../types';

export const calculate = (key) => {
    return {
        type: types.SET_EXPRESSION,
        payload: key
    }
}
export const minus = () => { return { type: types.MINUS } }
export const mode = () => { return { type: types.MODE } }
export const clear = () => { return { type: types.CLEAR } }
export const square = () => { return { type: types.SQUARE } }
export const squareRoot = () => { return { type: types.SQUARE_ROOT } }
export const evaluateExpression = () => { return { type: types.EVALUATE_EXPRESSION } }