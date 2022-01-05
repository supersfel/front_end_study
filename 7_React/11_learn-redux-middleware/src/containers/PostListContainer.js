//PostListContainer.js

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
    const {data, loading, error } = useSelector(state => state.posts.posts) // index.js안의 posts안의 posts
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])

    if (loading && !data) return <div>로딩중..</div>   //데이터가 있다면 로딩중이 안뜨게
    if (error) return <div>에러 발생!</div>
    if (!data) return  null;

    return <PostList posts = {data} />
    
}


export default PostListContainer;