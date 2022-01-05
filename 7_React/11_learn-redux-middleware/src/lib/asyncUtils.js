
//asyncUtils.js
import {call,put} from 'redux-saga/effects';

export const createPromiseSaga = (type, promiseCreator) => {
    const [SUCCESS, ERROR ] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action) {
        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type : SUCCESS,
                payload : result
            });
        } catch (e) {
            yield put({
                type : ERROR,
                payload : e,
                error : true
            });
        }
    } 
}

export const createPromiseSagaById = (type,promiseCreator) => {
    const [SUCCESS, ERROR ] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action) {  
        const id = action.meta;
        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type : SUCCESS,
                payload : result,
                meta : id,
            });
        } catch (e) {
            yield put({
                type : ERROR,
                payload : e,
                error : true,
                meta : id
            });
        }
    } 
}


export const createPromiseThunk = (type, promiseCreator) => {   //promiseCreater : Promise를 만드는 함수
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {    //param은하나라고 가정 (여러개면 객체로 받아오는형식)
        dispatch({type})
        try {
            const payload = await promiseCreator(param);
            dispatch({
                type : SUCCESS,
                payload
            })
        } catch (e) {
            dispatch({
                type : ERROR,
                payload : e,
                error : true,
            })
        }
    };
    
};

const defaultIdSelector = param => param; //파라미터 자체가 아이디이다.

export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelector) =>{
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {    //param은하나라고 가정 (여러개면 객체로 받아오는형식)
        const id = idSelector(param);
        dispatch({type, meta : id})
        try {
            const payload = await promiseCreator(param);
            dispatch({
                type : SUCCESS,
                payload,
                meta : id
            })
        } catch (e) {
            dispatch({
                type : ERROR,
                payload : e,
                error : true,
                meta : id
            })
        }
    };
};


export const handleAsyncActionsById = (type,key, keepData) => {   //key : posts or post
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (state,action) => {
        const id = action.meta;
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key] :{
                        ...state[key],
                        [id] : reducerUtils.loading(keepData ? (state[key][id] && state[key][id].data) : null),
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key] : {
                        ...state[key],
                        [id] : reducerUtils.success(action.payload)
                    }
                }
            case ERROR :
                return {
                    ...state,
                    [key] : {
                        ...state[key],
                        [id] : reducerUtils.error(action.payload)
                    }
                }
            default:
                return state
        }
    }

}

export const handleAsyncActions = (type,key, keepData) => {   //key : posts or post
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (state,action) => {
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key] :reducerUtils.loading(keepData ? state[key].data : null),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key] : reducerUtils.success(action.payload)
                }
            case ERROR :
                return {
                    ...state,
                    [key] : reducerUtils.error(action.payload)
                }
            default:
                return state
        }
    }

}


export const reducerUtils = {
    initial : (initialData =  null) => ({
        data : initialData,
        loading : false,
        error : null
    }),

    loading : (prevState = null) => ({
        data : prevState,
        loading : true,
        error : null
    }),
    success  : data => ({
        data,
        loading : false,
        error : null
    }),
    error : error => ({
        data : null,
        loading : false,
        error
    })
};