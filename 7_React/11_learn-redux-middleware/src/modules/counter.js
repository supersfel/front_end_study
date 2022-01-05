//counter.js
import { delay,put, takeEvery, takeLatest } from 'redux-saga/effects' //effects : reduxsaga가 수행하도록 작업을 명령하는 것

const INCREASE = 'INCREASE';  //action type
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC' //redux-saga
const DECREASE_ASYNC = "DECREASE_ASYNC"

export const increase = () => ({ type : INCREASE}); //action생성함수
export const decrease = () => ({ type : DECREASE});
export const increaseAsync = () => ({ type : INCREASE_ASYNC });
export const decreaseAsync = () => ({ type : DECREASE_ASYNC });


function* increaseSaga() {
    yield delay(1000);
    yield put(increase()); //dispatch와 유사

}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() { //내보내줘야함. 결국 rootsaga가 있어야함.
    yield takeEvery(INCREASE_ASYNC, increaseSaga); //INCREASE_ASYNC가 디스패치될때마다 increaseSaga실행
    yield takeLatest(DECREASE_ASYNC,decreaseSaga); //기존건 무시하고 가장 마지막것만 처리
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

