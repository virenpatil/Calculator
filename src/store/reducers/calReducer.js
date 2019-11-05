import * as types from '../types';

let initialState = {
    expression: "",
    total: 4
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADDITION: return {
            ...state,
            total: state.total
        };

        case types.SUBTRACTION: return {
            ...state,
            total: state.total
        };
        case types.MULTIFICATION: return {
            ...state,
            total: state.total
        };
        case types.DIVISION: return {
            ...state,
            total: state.total
        };
        case types.CLEAR: return {
            ...state,
            expression: "",
            total: 0
        };
        case types.SQUARE: return {
            ...state,
            expression: "",
            total: state.expression * state.expression
        };
        case types.SQUARE_ROOT: return {
            ...state,
            expression: "",
            total: Math.sqrt(state.expression)
        };
        default:
            return state;
    }
};