//App.js
import React, {useRef,useReducer,useMemo,useCallback , createContext} from 'react';
import produce from 'immer'
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...'); 
  return users.filter(user => user.active).length;
}

const initialState = {
  
  users : [
    {
        id : 1,
        username : 'mingyu',
        email : 'mingyu@naver.com',
        active : true  //항목 수정을 위해 추가
    },
    {
        id : 2,
        username : 'mingyu2',
        email : 'mingyu2@naver.com',
        active : false
    },
    {
        id : 3,
        username : 'mingyu3',
        email : 'mingyu3@naver.com',
        active : false
    }
  
  ]
}


function reducer(state,action) {
  switch (action.type){
    
    case 'CREATE_USER':

      return produce(state,draft => { //immer 사용
        draft.users.push(action.user);
      })
     
    case 'TOGGLE_USER':


      return produce(state,draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
      
    case 'REMOVE_USER':
      return produce(state,draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index,1);
      })
    
      // return{
      //   ...state,
      //   users : state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('unhandled action');
  }
}


export const UserDispatch = createContext(null);  // dispatch를 내보내는 식으로 적용


function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  const { users } = state;


  const count = useMemo(()=> countActiveUsers(users), [users])
  return (
    <UserDispatch.Provider value = {dispatch}>
      < CreateUser />
      <UserList users = {users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
