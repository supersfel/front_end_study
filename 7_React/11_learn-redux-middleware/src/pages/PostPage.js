//pages/PostPage.js

import React from 'react';
import PostContainer from '../containers/PostContainer';

function PostPage({match}) {
    const {id} = match.params;
    const postId = parseInt(id,10); //숫자를 문자열로 변환
    return (
        <PostContainer postId = {postId} />
    );
    
}


export default PostPage;