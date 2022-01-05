//modules/index.js
import { combineReducers } from "redux"; //root리듀서를 만들기 위해
import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from './posts';
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({counter,posts});

export function* rootSaga() {
    yield all([counterSaga(), postsSaga]);
}

export default rootReducer;
