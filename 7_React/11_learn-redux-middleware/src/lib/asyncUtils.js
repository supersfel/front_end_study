//asyncUtils.js

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
    }
    
}

export const handleAsyncActions = (type,key) => {   //key : posts or post
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (state,action) => {
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key] :reducerUtils.loading(),
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