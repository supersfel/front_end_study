//myLogger.js
const myLogger = store => next => action => {
    console.log(action);
    console.log('\t', store.getState())//action이 리듀서에서 처리되기 전 상태를 출력
    const result = next(action); //action을 다음 미들웨어나 리듀서로 전달
    console.log('\t', store.getState())//action이 리듀서에서 처리된 다음상태를 출력

    return result; // container에서 dispatch된 결과값
}

export default myLogger;