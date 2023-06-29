import axios from "axios";

const  SHOW_POSTS = 'ADD_POSTS';

const initialState= {
    posts:[]
}

export const postsReducer = (state = initialState , action) =>{
    if(action.type === SHOW_POSTS){
        return {posts: action.payload}
    }
    return state
}

const showPosts = payload => ({type: SHOW_POSTS, payload})

export const fetchPosts = () => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').
        then(response =>dispatch(
            showPosts(response.data)
        ))
    }

}




