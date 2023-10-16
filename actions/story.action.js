import axios from 'axios';

// Story actions
export const GET_STORIES = 'GET_STORIES';
export const ADD_STORY = 'ADD_STORY';
export const LIKE_STORY = 'LIKE_STORY';
export const DISLIKE_STORY = 'DISLIKE_STORY';
export const VIEW_STORY = 'VIEW_STORY';
export const COMMENT_STORY = 'COMMENT_STORY';
export const DELETE_STORY = 'DELETE_STORY';

// Action creators
export const getStories = (num) => {
  return (dispatch) => {
    return axios
      .get('http://192.168.0.14:4000/api/stories')
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_STORIES, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const addStory = (data) => {
  return (dispatch) => {
    return axios
      .post('http://192.168.0.14:4000/api/stories/', data)
      .then((res) => {
        dispatch({ type: ADD_STORY, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const likeStory = (storyId, userId) => {
  return (dispatch) => {
    return axios
      .patch(`http://192.168.0.14:4000/api/stories/like-story/${storyId}`, { id: userId })
      .then((res) => {
        dispatch({ type: LIKE_STORY, payload: { storyId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const dislikeStory = (storyId, userId) => {
  return (dispatch) => {
    return axios
      .patch(`http://192.168.0.14:4000/api/stories/dislike-story/${storyId}`, { id: userId })
      .then((res) => {
        dispatch({ type: DISLIKE_STORY, payload: { storyId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const viewStory = (storyId, viewerId) => {
  return (dispatch) => {
    return axios
      .patch(`http://192.168.0.14:4000/api/stories/view-story/${storyId}`, { viewerId })
      .then((res) => {
        dispatch({ type: VIEW_STORY, payload: { storyId, viewerId } });
      })
      .catch((err) => console.log(err));
  };
};

export const commentStory = (storyId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios
      .patch(`http://192.168.0.14:4000/api/stories/comment-story/${storyId}`, {
        commenterId,
        text,
        commenterPseudo,
      })
      .then((res) => {
        dispatch({ type: COMMENT_STORY, payload: { storyId, comment: res.data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteStory = (storyId) => {
  return (dispatch) => {
    return axios
      .delete(`http://192.168.0.14:4000/api/stories/${storyId}`)
      .then((res) => {
        dispatch({ type: DELETE_STORY, payload: { storyId } });
      })
      .catch((err) => console.log(err));
  };
};


