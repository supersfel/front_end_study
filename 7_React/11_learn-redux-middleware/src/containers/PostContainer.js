//containers/PostContainer
import React , {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Post from '../components/Post'
import { reducerUtils } from '../lib/asyncUtils';
import {  getPost, goToHome } from '../modules/posts';

function PostContainer({postId}) {

    const { data, loading, error } =useSelector(state => state.posts.post[postId] || reducerUtils.initial()); //에러방지를 위해
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return; //데이터가 있다면 아무것도 안함
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if(loading && !data) return <div>로딩중..</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null;

    return (
        <>
            <button onClick={ () => dispatch(goToHome()) }>홈으로 이동</button>
            <Post post={data} />
        </>
        
    );
    
}


export default PostContainer;