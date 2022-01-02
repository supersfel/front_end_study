//TodoContext.js
import React,{useReducer, createContext, useContext, useRef} from 'react';
import TodoList from './TodoList';

const initialTodos = [
    {
        id : 1,
        text : '민규의 첫번째 할일',
        done : true,
    },
    {
        id : 2,
        text : '민규의 두번째 할일',
        done : true,
    },
    {
        id : 3,
        text : '민규의 세번째 할일',
        done : true,
    },
    {
        id : 4,
        text : '민규의 네번째 할일',
        done : false,
    },
];



function todoReducer(state,action) {
    switch (action.type){
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(
                todo => todo.id === action.id ? { ...todo,done : !todo.done } : todo
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
    
    default :
        throw new Error(`Unhandled action type : ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext(); //id값 관리





export function TodoProvider({children}) {
    const [state,dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);


    return (
        <TodoStateContext.Provider value = {state}>
            <TodoDispatchContext.Provider value = {dispatch}>
                <TodoNextIdContext.Provider value = {nextId}>
                    {children}
                </TodoNextIdContext.Provider>                
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );    
}


export function useTodoState() {    //나중에 Todolist에서 그냥 const state = useTodoState();로 선언해서 사용이 가능하도록
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() { //랜더링할 필요가 없을때 불필요한 랜더링을 막기위해서 나누어서 만듬
    
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}