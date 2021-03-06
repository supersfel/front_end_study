//useInputs.js
import {useReducer,useCallback} from 'react';



function reducer(state,action) {
    switch (action.type){
        case 'CHANGE':
            return {
                ...state,
                [action.name] : action.value
            }
        case 'RESET' :
            return {
                ...state,
                action
            }
    }
}


function useInputs(initialForm) {
    
    const [state,dispatch] = useReducer(reducer,initialForm);
    const onChange = useCallback(e => {
        const {name,value} = e.target;
        dispatch({
            type : 'CHANGE',
            name,
            value
        })
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type : 'RESET',
            initialForm
        })
    },[]);


    return [state,onChange,reset];
}

export default useInputs;