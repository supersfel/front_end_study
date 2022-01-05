//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';  //개발자도구 적용
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context : {
    history : customHistory   // saga에서 조회가 가능
  }
});

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      ReduxThunk.withExtraArgument({history : customHistory}),
      logger
    )));//미들웨어 적용

    sagaMiddleware.run(rootSaga) //rootSaga를 호출할 필요는



ReactDOM.render(
  <Router history  = {customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
