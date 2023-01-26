import axios from 'axios';

//post actions

export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.34:5000/api/post`)
            .then((res) => {
                const array = res.data.slice(0, num);
                dispatch({ type: GET_POSTS, payload: array});
            }
            )
            .catch((err) => console.log(err));
    }
};

export const likePost = (userId, postId) => {
    return (dispatch) => {
        return axios
            .patch(`http://192.168.0.34:5000/api/post/like-post/` + postId , userId)
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            }
            )
            .catch((err) => console.log(err));
    }
};

export const unlikePost = (userId, postId) => {
    return (dispatch) => {
        return axios
            .patch(`http://192.168.0.34:5000/api/post/unlike-post/` + postId , userId)
            .then((res) => {
                dispatch({ type: 
                    UNLIKE_POST, payload: { postId, userId } });
            }
            )
            .catch((err) => console.log(err));
    }
};

