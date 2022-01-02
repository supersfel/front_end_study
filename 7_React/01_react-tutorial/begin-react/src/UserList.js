//UserList.js
import React, {useEffect, useContext} from 'react';
import { UserDispatch } from './App';  //App에서 Dispatch를 가져옴

const User = React.memo(function User({user}) {
    const {username,email,id, active} = user;
    const dispatch = useContext(UserDispatch); // 가져온 Dispatch값을 불러옴
    
    useEffect(() =>{
        console.log('user값이 바뀐 후')
        console.log(user);
        return () => { //컴포넌트가 사라질대 실행
            console.log('user값이 바뀌기 전')
            console.log(user);
        }
    }, [user]);  //값을 쓰고싶으면 deps(옆에 [user])값을 넣어주어야 최신값을 불러올 수 있다.

    return (
        <div>
                <b style ={{
                    color : active ? 'green' : 'black',
                    cursor : 'pointer'
                }}
                  onClick={() => dispatch({
                      type : "TOGGLE_USER",
                      id
                  })}
                >
                    {username}
                </b><span>({email})</span>
                <button onClick={() => dispatch({
                    type : 'REMOVE_USER',
                    id
                })}>삭제</button> {/* onRemove를 id를 파라미터로 실행 */}
            </div>  /*꼭 함수로 호출해줘야 전체가 사라지지 않음*/
    )
});


function UserList({users}) {
    

    return (
        <div>
            {
                users.map(
                    
                    (user,index) =>( 
                        <User user={user} 
                        key = {user.id} 
                    
                    />)
                    //(user,index) =>( <User user={user} key = {index}/>)
                )
            }
        </div>
    );

}


export default React.memo(UserList, (preProps,nextProps) => nextProps.users === preProps.users);