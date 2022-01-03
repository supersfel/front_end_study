//.modules/posts.js

import * as postsAPI from '../api/posts';//postsAPI.getpost등으로 사용가능하게

/*액션*/
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';  

/*thunk */
export const getPosts = () => async dispatch => {
    //요청 시작
    dispatch({type : GET_POSTS });

    //API호출
    try{
        const posts = await postsAPI.getPosts();
        dispatch({
            type : GET_POSTS_SUCCESS,
            posts
        });
    } catch (e) {
        dispatch({
            type : GET_POSTS_ERROR,
            error : e
        })
    }
}

/*thunk */
export const getPost = (id) => async dispatch => { 
    //요청 시작
    dispatch({type : GET_POST });

    //API호출
    try{
        const post = await postsAPI.getPost(id);
        dispatch({
            type : GET_POST_SUCCESS,
            post
        });
    } catch (e) {
        dispatch({
            type : GET_POST_ERROR,
            error : e
        })
    }
};


const initialState = {
    posts:{
        loading : false,
        data : null,
        error : null,
    },
    post:{
        loading : false,
        data : null,
        error : null,
    },
}

export default function posts(state = initialState,action) {
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                posts:{
                    loading : true,
                }
            }
        default:
            return state;
    }
}