import * as types from '../types';

let initialState = {
    expression: "",
    mode: 'basic',
    total: 0
};

let setExpression = ({ expression, total }, action) => {
    if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
        console.log("b", expression);
        expression = expression.slice(0, expression.length - 1);
        console.log("a", expression);
    }
    switch (action.type) {
        case types.SET_EXPRESSION:
            if (["+", "/", "*", "%"].includes(action.payload) && !expression) {
                return `${total}${action.payload}`;
            }
            return `${!expression && total ? total : ""}${expression +
                action.payload}`;
        default:
            return expression;
    }
}

let calc = (expression) => {

    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression)

    if (!matched) {
        return 0;
    }

    if (/^[*+\/]/.test(expression)) {
        return () => {
            throw new Error('Cannot start the expression with invalid operators')
        }
    }

    return new Function(`return ${matched[0]}`)()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            let expression = setExpression(state, action);
            return {
                ...state,
                expression,
                total: calc(expression) || state.total
            };
        case types.CLEAR: return {
            ...state,
            expression: "",
            total: 0
        };
        case types.MINUS: return {
            ...state,
            total: -state.total
        };
        case types.MODE: 
        let mode = state.mode === 'basic' ? 'sci' : "basic"
        return {
            ...state,
            mode: mode,
            expression: "",
            total: 0
        };
        case types.SQUARE: 
        let square = state.expression * state.expression;
        return {
            ...state,
            expression: "",
            total: square
        };
        case types.SQUARE_ROOT: return {
            ...state,
            expression: "",
            total: Math.sqrt(state.expression)
        };
        case types.EVALUATE_EXPRESSION: return {
            ...state,
            expression: "",
            total: calc(state.expression) || state.expression || state.total
        };
        default: return state;
    }
};