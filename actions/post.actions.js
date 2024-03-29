import axios from 'axios';
import { APP_API_URL } from '../config';

// Post actions
export const GET_POSTS = "GET_POSTS";
export const GET_ADD_POSTS = "GET_ADD_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";
export const ADD_POSTS_SUCCESS = "ADD_POSTS_SUCCESS";





export const getPosts = (num) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${APP_API_URL}/api/post`);
            const array = response.data.slice(0, num);
            dispatch({ type: GET_POSTS, payload: array });
        } catch (error) {
            console.error('Erreur lors de la récupération des publications:', error);
        }
    };
};





export const addPosts = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`${APP_API_URL}/api/post`, data);

            if (res.data.errors) {
                dispatch({ type: CREATE_POST_ERROR, payload: res.data.errors });
            } else {
                dispatch({ type: ADD_POSTS_SUCCESS });
            }
        } catch (error) {
            console.error('Erreur lors de la création du post :', error);
            dispatch({ type: CREATE_POST_ERROR, payload: 'Une erreur s\'est produite lors de la création du post.' });
        }
    };
};


export const likePost = (postId, userId) => {
    return async (dispatch) => {
        try {
            await axios.patch(`${APP_API_URL}/api/post/like-post/` + postId, { id: userId });
            dispatch({ type: LIKE_POST, payload: { postId, userId } });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du like:', error);
        }
    };
};

export const unlikePost = (postId, userId) => {
    return async (dispatch) => {
        try {
            await axios.patch(`${APP_API_URL}/api/post/unlike-post/` + postId, { id: userId });
            dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du unlike:', error);
        }
    };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
    console.log("postId:", postId);
    console.log("userId:", commenterId);
    console.log("text:", text);
    console.log("pseudo:", commenterPseudo);
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${APP_API_URL}/api/post/comment-post/${postId}`,
            data: { commenterId, text, commenterPseudo },
        })
            .then((res) => {
                const comment = res.data.comment; 
                dispatch({ type: ADD_COMMENT, payload: { postId, comment } });
            })
            .catch((err) => console.log(err));
    };
};
