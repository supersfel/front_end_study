//.modules/posts.js

import * as postsAPI from '../api/post';//postsAPI.getpost등으로 사용가능하게
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';

/*액션*/
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';  

/*thunk */
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);

/*thunk */ 
export const getPost =  createPromiseThunk(GET_POST, postsAPI.getPostById)


const initialState = {
    posts:reducerUtils.initial(),
    post:reducerUtils.initial()
}


const getPostsReducer = handleAsyncActions(GET_POSTS,'posts');
const getPostReducer = handleAsyncActions(GET_POST,'post');

export default function posts(state = initialState,action) {
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state,action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state,action);
        default:
            return state;
    }
}