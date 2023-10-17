import {
    GET_VIDEO_REELS,
    ADD_VIDEO_REELS,
    LIKE_VIDEO_REELS,
    DISLIKE_VIDEO_REELS,
    VIEW_VIDEO_REELS,
    COMMENT_VIDEO_REELS,
    DELETE_VIDEO_REELS,
  } from "../actions/réels.action";
  
  const initialState = [];
  
  export default function videoReelsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEO_REELS:
        return action.payload;
      case ADD_VIDEO_REELS:
        return [action.payload, ...state];
      case LIKE_VIDEO_REELS:
        return state.map((videoRéels) =>
          videoRéels._id === action.payload.videoRéelsId
            ? {
                ...videoRéels,
                likers: [action.payload.userId, ...videoRéels.likers],
              }
            : videoRéels
        );
      case DISLIKE_VIDEO_REELS:
        return state.map((videoRéels) =>
          videoRéels._id === action.payload.videoRéelsId
            ? {
                ...videoRéels,
                likers: videoRéels.likers.filter(
                  (id) => id !== action.payload.userId
                ),
              }
            : videoRéels
        );
      case VIEW_VIDEO_REELS:
        return state.map((videoRéels) =>
          videoRéels._id === action.payload.videoRéelsId
            ? {
                ...videoRéels,
                views: [
                  ...videoRéels.views,
                  { viewerId: action.payload.viewerId, viewed_at: Date.now() },
                ],
              }
            : videoRéels
        );
      case COMMENT_VIDEO_REELS:
        return state.map((videoRéels) =>
          videoRéels._id === action.payload.videoRéelsId
            ? {
                ...videoRéels,
                comments: [action.payload.comment, ...videoRéels.comments],
              }
            : videoRéels
        );
      case DELETE_VIDEO_REELS:
        return state.filter(
          (videoRéels) => videoRéels._id !== action.payload.videoRéelsId
        );
      default:
        return state;
    }
  }
  