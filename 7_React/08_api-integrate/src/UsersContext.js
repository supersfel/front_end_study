//UsersContext.js
import React, {createContext,useReducer,useContext} from 'react';
import * as api from './api'; //api안의 함수를 다 데리고옴
import createAsyncDispatcher, { createAsyncHandler, initialAsyncState } from './asyncActionUtils';


const usersHandler = createAsyncHandler('GET_USERS','users');
const userHandler = createAsyncHandler('GET_USER','user');



const initialState = {
    users : initialAsyncState,
    user : initialAsyncState
}




function usersReducer(state,action) {
    switch (action.type) {
        case 'GET_USERS':            
        case 'GET_USERS_SUCCESS':            
        case 'GET_USERS_ERROR':
            return usersHandler(state,action);
            
        case 'GET_USER':            
        case 'GET_USER_SUCCESS':            
        case 'GET_USER_ERROR':
            return userHandler(state,action);   
              
        default:
            throw new Error('Error!!!!');
    }
}




const USersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({children}) {
    const [state,dispatch] = useReducer(usersReducer,initialState);
    return (
        <USersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value = {dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </USersStateContext.Provider>
    )
}


export function useUsersState() {
    const state = useContext(USersStateContext);
    if (!state){
        throw new Error('Error!!!! _UserProvider');
    }
    return state;
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch){
        throw new Error('Error!!!! _UserProvider');
    }
    return dispatch;
}


export const getUsers = createAsyncDispatcher('GET_USERS',api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER',api.getUser);