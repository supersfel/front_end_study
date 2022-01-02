const SET_DIFF = 'counter/SET_DIFF'; //액션
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({ type : SET_DIFF, diff}); //액션생성함수
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

const initialState ={   //초기상태
    number : 0,
    diff : 1
};

export default function counter(state = initialState, action) {   //리듀서
    switch ( action.type ) {
         case SET_DIFF:
             return {
                 ...state,
                 diff : action.diff
             };
        case INCREASE:
        return {
            ...state,
            number : state.number + state.diff
        };
        case DECREASE:
        return {
            ...state,
            number : state.number - state.diff
        };
        default:
            return state

    }
}