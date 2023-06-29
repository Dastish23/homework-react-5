import thunk from "redux-thunk";
import {combineReducers, applyMiddleware,legacy_createStore as createStore} from "redux";
import {postsReducer} from "./postsReducer.js";
import {commentsReducer} from "./commentsReducer.js";

const rootReducer =  combineReducers(
    {posts: postsReducer,
        comments: commentsReducer

    }
)

export const store = createStore (rootReducer , applyMiddleware(thunk))