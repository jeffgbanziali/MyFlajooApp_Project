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
<<<<<<< HEAD
            .get(`http://192.168.0.40:5000/api/post`)
=======
            .get(`http://10.3.206.20:5000/api/post`)
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
            .get(`http://192.168.0.40:5000/api/post`, data)
=======
            .get(`http://10.3.206.20:5000/api/post`, data)
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
            url: `http://192.168.0.40:5000/api/post/like-post/` + postId,
=======
            url: `http://10.3.206.20:5000/api/post/like-post/` + postId,
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            })
<<<<<<< HEAD
            .catch((err) => console.log(err, "error de like "));

    };

=======
            .catch((err) => console.log(err));
    };
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
<<<<<<< HEAD
            url: `http://192.168.0.40:5000/api/post/unlike-post/` + postId,
=======
            url: `http://10.3.206.20:5000/api/post/unlike-post/` + postId,
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
            .patch(`http://192.168.0.40:5000/api/post/comment-post/` + postId, { commenterId, text, commenterPseudo })
=======
            .patch(`http://10.3.206.20:5000/api/post/comment-post/` + postId, { commenterId, text, commenterPseudo })
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            .then((res) => {
                dispatch({ type: ADD_COMMENT, payload: { postId } });
            })
            .catch((err) => console.log(err));
    }
};
