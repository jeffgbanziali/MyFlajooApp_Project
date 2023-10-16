import {
    GET_STORIES,
    ADD_STORY,
    LIKE_STORY,
    DISLIKE_STORY,
    VIEW_STORY,
    COMMENT_STORY,
    DELETE_STORY,
  } from "../actions/story.action";
  
  const initialState = [];
  
  export default function storyReducer(state = initialState, action) {
    switch (action.type) {
      case GET_STORIES:
        return action.payload;
      case ADD_STORY:
        return [action.payload, ...state];
      case LIKE_STORY:
        return state.map((story) =>
          story._id === action.payload.storyId
            ? { ...story, likers: [action.payload.userId, ...story.likers] }
            : story
        );
      case DISLIKE_STORY:
        return state.map((story) =>
          story._id === action.payload.storyId
            ? {
                ...story,
                likers: story.likers.filter((id) => id !== action.payload.userId),
              }
            : story
        );
      case VIEW_STORY:
        return state.map((story) =>
          story._id === action.payload.storyId
            ? {
                ...story,
                views: [
                  ...story.views,
                  { viewerId: action.payload.viewerId, viewed_at: Date.now() },
                ],
              }
            : story
        );
      case COMMENT_STORY:
        return state.map((story) =>
          story._id === action.payload.storyId
            ? { ...story, comments: [action.payload.comment, ...story.comments] }
            : story
        );
      case DELETE_STORY:
        return state.filter((story) => story._id !== action.payload.storyId);
      default:
        return state;
    }
  }
  