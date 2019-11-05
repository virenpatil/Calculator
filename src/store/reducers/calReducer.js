import * as types from '../types';

let initialState = {
    expression: "",
    operantfirst : "",
    operantsecond: "",
    oprator :'',
    total: 4
};

const handleOperaion = () =>{
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            console.log('[Reducer] SET_EXPRESSION state --> ', state,action);
            
            return {
                ...state,
                total: action.payload
            };
        case types.ADDITION:
            console.log('[Reducer] Addition state --> ', state);
            return {
                ...state,
                
            };

        case types.SUBTRACTION:
            console.log('[Reducer] Subtraction state --> ', state);
            return {
                ...state,
                total: state.total
            };
        case types.MULTIFICATION:
            console.log('[Reducer] multification state --> ', state);
            return {
                ...state,
                total: state.total
            };
        case types.DIVISION:
            console.log('[Reducer] division state --> ', state);
            return {
                ...state,
                total: state.total
            };
        case types.CLEAR:
            console.log('this is data --> clear method  ', state);
            return {
                ...state,
                expression: "",
                total: 0
            };
        case types.SQUARE:
            console.log('[Reducer] square state --> ', state);
            return {
                ...state,
                expression: "",
                total: state.expression * state.expression
            };
        case types.SQUARE_ROOT:
            console.log('[Reducer] square_root state --> ', state);
            return {
                ...state,
                expression: "",
                total: Math.sqrt(state.expression)
            };
        default:
            console.log('[Reducer] Default state --> ', state);
            return state;
    }
};