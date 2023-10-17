import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";
import conversationReducer from "./conversation.reducer";
import storyReducer from "./story.reducer";
import videoReelsReducer from "./réels.reducer";

export default combineReducers({
  // user: userReducer,
  userReducer,
  usersReducer,
  // posts: postsReducer,
  postReducer,
  storyReducer,
  videoReelsReducer,
  // conversation: conversationReducer,²
  conversationReducer,
});
