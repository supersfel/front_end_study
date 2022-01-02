//User.js
import React from 'react';

function User({user}) {
   // if (!user) return null; //에러방지 코드


    return(
        <div>
            <div>
                <b>ID</b> : {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
}


export default User;