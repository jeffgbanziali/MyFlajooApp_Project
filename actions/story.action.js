import axios from 'axios';
import { APP_API_URL } from '../config';

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
      .get(`${APP_API_URL}/api/stories`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_STORIES, payload: array });
      })
      .catch((err) => console.log(err));
  };
};

export const addStory = (data) => {
  return async (dispatch) => {
    try {
      console.log('Adding story:', data);

      const response = await axios.post(`${APP_API_URL}/api/stories/`, data);

      if (response.data.message === 'Story added to container successfully!') {
        console.log('Story added successfully:', response.data.story);

        // Mettre à jour le state Redux avec l'histoire nouvellement ajoutée
        dispatch({ type: ADD_STORY, payload: response.data.story });
      } else {
        console.log('Error adding story:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding story:', error);

      // Gérer les erreurs ici (si nécessaire)
    }
  };
};

export const likeStory = (storyId, posterId) => {
  return (dispatch) => {
    return axios
      .patch(`${APP_API_URL}/api/stories/like-story/${storyId}`, posterId)
      .then((res) => {
        dispatch({ type: LIKE_STORY, payload: { storyId, posterId } });
      })
      .catch((err) => console.log(err));
  };
};

export const dislikeStory = (storyId, posterId) => {
  return (dispatch) => {
    return axios
      .patch(`${APP_API_URL}/api/stories/dislike-story/${storyId}`, posterId)
      .then((res) => {
        dispatch({ type: DISLIKE_STORY, payload: { storyId, posterId } });
      })
      .catch((err) => console.log(err));
  };
};




export const viewStory = (storyId, viewerId) => {
  return (dispatch) => {
    return axios
      .patch(`${APP_API_URL}/api/stories/view-story/${storyId}`, { viewerId })
      .then((res) => {
        dispatch({ type: VIEW_STORY, payload: { storyId, viewerId } });
      })
      .catch((err) => console.log(err));
  };
};

export const commentStory = (storyId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios
      .patch(`${APP_API_URL}/api/stories/comment-story/${storyId}`, {
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
      .delete(`${APP_API_URL}/api/stories/${storyId}`)
      .then((res) => {
        dispatch({ type: DELETE_STORY, payload: { storyId } });
      })
      .catch((err) => console.log(err));
  };
};


