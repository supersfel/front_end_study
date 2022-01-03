//counter.js
const INCREASE = 'INCREASE';  //action type
const DECREASE = 'DECREASE';

export const increase = () => ({ type : INCREASE}); //action생성함수
export const decrease = () => ({ type : DECREASE});

export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());
    },1000)
}

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(decrease());
    },1000)
}

const initialState = 0; //초기상태


export default function counter (state = initialState,action) { //리듀서
    switch (action.type) {
        case INCREASE:
            return state +1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

