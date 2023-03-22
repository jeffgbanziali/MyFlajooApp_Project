import axios from 'axios';

//post actions

export const GET_POSTS = "GET_POSTS";
export const GET_ADD_POSTS = "GET_ADD_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";


export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.40:5000/api/post`)
            .then((res) => {
                const array = res.data.slice(0, num);
                dispatch({ type: GET_POSTS, payload: array });
            }
            )
            .catch((err) => console.log(err));
    }
};

export const addPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.40:5000/api/post`, data)
            .then((res) => {
                if (res.data.errors) {
                    dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
                } else {
                    dispatch({ type: GET_POST_ERRORS, payload: "" });
                }
            });
    }
};

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://192.168.0.40:5000/api/post/like-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err, "error de like "));

    };

};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://192.168.0.40:5000/api/post/unlike-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};
export const addComment = (userId, postId, text) => {
    return (dispatch) => {
        return axios
            .patch(`http://192.168.0.40:5000/api/post/comment-post/` + postId, { commenterId, text, commenterPseudo })
            .then((res) => {
                dispatch({ type: ADD_COMMENT, payload: { postId } });
            })
            .catch((err) => console.log(err));
    }
};
