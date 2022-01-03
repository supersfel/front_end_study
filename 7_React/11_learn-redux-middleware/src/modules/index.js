//modules/index.js
import { combineReducers } from "redux"; //root리듀서를 만들기 위해
import counter from "./counter";

const rootReducer = combineReducers({counter});

export default rootReducer;