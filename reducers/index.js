import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import postReducer from './post.reducer';


export default combineReducers({
    // user: userReducer,
    userReducer,
    usersReducer,
    // posts: postsReducer,
    postReducer,
});


