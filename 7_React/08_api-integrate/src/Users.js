//Users.js
import React ,{useState} from 'react';
import User from './User'
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';




function Users() {

    const [userId,setUserId] = useState(null);  //개개인 id로 호출하기 위한 useState
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { isLoading,data : users , error } = state.users;

    const fetchData = () =>{
        getUsers(dispatch);
    }


    if ( isLoading ) return <div>로딩중..</div>
    if (error) return <div>에러 발생!!</div>
    if (!users) return <button onClick={fetchData}>불러오기</button>;  //users값이 유효하지 않는 경우

    return (
        <>        
            <ul>
                {users.map(user => <li key={user.id} onClick={() => setUserId(user.id)}>
                    {user.username} ({user.name})
                </li>)}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id = {userId} /> }
        </>

    );
    
}


export default Users;

