import axios from "axios"


const SHOW_COMMENTS = 'SHOW_COMMENTS';

export const showComments = (postId, comments) => ({
    type: SHOW_COMMENTS,
    payload: { postId, comments }
});

const initialState = {
    comments: {},
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_COMMENTS: {
            const { postId, comments } = action.payload;
            return { ...state, comments: { ...state.comments, [postId]: comments } };
        }
        default:
            return state;
    }
};

export const fetchComments = (postId) => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                dispatch(showComments(postId, response.data));
            })
    }
}



