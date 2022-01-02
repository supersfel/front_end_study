//User.js

import React, { useEffect } from 'react';
import { useUsersDispatch, useUsersState, getUser } from './UsersContext';


function User( {id} ) {

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { isLoading,data : user , error } = state.user;
    

    useEffect(() => {
        getUser(dispatch,id);
    },[dispatch,id])
    
    if ( isLoading ) return <div>로딩중..</div>
    if (error) return <div>에러 발생!!</div>
    if (!user) return null;  //users값이 유효하지 않는 경우


    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    );
    
}


export default User;