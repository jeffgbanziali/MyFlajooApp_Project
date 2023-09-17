import axios from 'axios';

// Post actions
export const GET_POSTS = "GET_POSTS";
export const GET_ADD_POSTS = "GET_ADD_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";

export const getPosts = (num) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://192.168.0.14:3000/api/post`);
            const array = response.data.slice(0, num);
            dispatch({ type: GET_POSTS, payload: array });
        } catch (error) {
            console.error('Erreur lors de la récupération des publications:', error);
        }
    };
};

export const addPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.14:3000/api/post`, data)
            .then((res) => {
                if (res.data.errors) {
                    dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
                } else {
                    dispatch({ type: GET_POST_ERRORS, payload: "" });
                }
            });
    };
};

export const likePost = (postId, userId) => {
    return async (dispatch) => {
        try {
            await axios.patch(`http://192.168.0.14:3000/api/post/like-post/` + postId, { id: userId });
            dispatch({ type: LIKE_POST, payload: { postId, userId } });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du like:', error);
        }
    };
};

export const unlikePost = (postId, userId) => {
    return async (dispatch) => {
        try {
            await axios.patch(`http://192.168.0.14:3000/api/post/unlike-post/` + postId, { id: userId });
            dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du unlike:', error);
        }
    };
};

export const addComment = (userId, postId, text) => {
    return async (dispatch) => {
        try {
            await axios.patch(`http://192.168.0.14:3000/api/post/comment-post/` + postId, { commenterId: userId, text });
            dispatch({ type: ADD_COMMENT, payload: { postId } });
        } catch (error) {
            console.error('Erreur lors de l\'ajout du commentaire:', error);
        }
    };
};
