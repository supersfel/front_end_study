//CreateUser.js

import React, { useCallback, useContext,useRef } from 'react';
import { UserDispatch } from './App';  //App에서 Dispatch를 가져옴
import useInputs from './useInputs';


function CreateUser() {
    const [{ username, email }, onChange, reset] = useInputs({  //useInputs에서 불러온 값들
        username: '',
        email: ''
      });

    const dispatch = useContext(UserDispatch); // 가져온 Dispatch값을 불러옴
    const nextId = useRef(4); // 3까지는 적어두었기 때문


    const onCreate =() => {  //함수 위치를 변경함
        dispatch({
            type : 'CREATE_USER',
            user : {
              id : nextId.current,
              username,
              email,
            }
          });
          nextId.current +=1
          reset();
    }


    return (
        <div>
            <input 
                name='username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
            />
            <input 
                name='email'
                placeholder='email'
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);