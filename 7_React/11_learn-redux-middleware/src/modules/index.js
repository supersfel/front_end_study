//modules/index.js
import { combineReducers } from "redux"; //root리듀서를 만들기 위해
import counter from "./counter";
import posts from './posts';

const rootReducer = combineReducers({counter,posts});

export default rootReducer;