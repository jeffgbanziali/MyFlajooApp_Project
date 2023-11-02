import axios from "axios";
import { APP_API_URL } from "../config";

// VideoRéels actions
export const GET_VIDEO_REELS = "GET_VIDEO_REELS";
export const ADD_VIDEO_REELS = "ADD_VIDEO_REELS";
export const LIKE_VIDEO_REELS = "LIKE_VIDEO_REELS";
export const DISLIKE_VIDEO_REELS = "DISLIKE_VIDEO_REELS";
export const VIEW_VIDEO_REELS = "VIEW_VIDEO_REELS";
export const COMMENT_VIDEO_REELS = "COMMENT_VIDEO_REELS";
export const DELETE_VIDEO_REELS = "DELETE_VIDEO_REELS";




export const getVideoReels = (num) => {
  return (dispatch) => {
    return axios
      .get(`${APP_API_URL}/api/videoReels`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_VIDEO_REELS, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const addVideoReels = (data) => {
  return (dispatch) => {
    return axios
      .post(`${APP_API_URL}/api/videoReels/`, data)
      .then((res) => {
        dispatch({ type: ADD_VIDEO_REELS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const likeVideoReels = (videoRéelsId, userId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${APP_API_URL}/api/videoReels/like-videoReels/${videoRéelsId}`,
        { id: userId }
      )
      .then((res) => {
        dispatch({ type: LIKE_VIDEO_REELS, payload: { videoRéelsId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const dislikeVideoReels = (videoRéelsId, userId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${APP_API_URL}/api/videoReels/dislike-videoReels/${videoRéelsId}`,
        { id: userId }
      )
      .then((res) => {
        dispatch({
          type: DISLIKE_VIDEO_REELS,
          payload: { videoRéelsId, userId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const viewVideoReels = (videoRéelsId, viewerId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${APP_API_URL}/api/videoReels/view-videoReels/${videoRéelsId}`,
        { viewerId }
      )
      .then((res) => {
        dispatch({
          type: VIEW_VIDEO_REELS,
          payload: { videoRéelsId, viewerId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const commentVideoReels = (
  videoRéelsId,
  commenterId,
  text,
  commenterPseudo
) => {
  return (dispatch) => {
    return axios
      .patch(
        `${APP_API_URL}/api/videoReels/comment-videoReels/${videoRéelsId}`,
        {
          commenterId,
          text,
          commenterPseudo,
        }
      )
      .then((res) => {
        dispatch({
          type: COMMENT_VIDEO_REELS,
          payload: { videoRéelsId, comment: res.data },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteVideoReels = (videoRéelsId) => {
  return (dispatch) => {
    return axios
      .delete(`${APP_API_URL}/api/videoReels/${videoRéelsId}`)
      .then((res) => {
        dispatch({ type: DELETE_VIDEO_REELS, payload: { videoRéelsId } });
      })
      .catch((err) => console.log(err));
  };
};
