import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";


export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.34:5000/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const uploadPicture = (data, uid) => {
    return (dispatch) => {
        return axios
            .post("http://192.168.0.34:5000/api/user/upload", data)
            .then((res) => {
                return axios // return axios to chain the two requests
                    .get(`http://192.168.0.34:5000/api/user/${uid}`)
                    .then((res) => {
                        dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
                    })
                    .catch((err) => console.log(err));

            })
            .catch((err) => console.log(err));
    }
};


export const updateBio = (bio, userId) => {
    return (dispatch) => {
        const data = bio
        return axios
            .put(`http://192.168.0.34:5000/api/user/` + userId, { bio })
            .then((res) => {
                dispatch({ type: UPDATE_BIO, payload: bio });
            }
            )
            .catch((err) => console.log(err));
    }
};

export const followUser = (idToFollow, followerId) => {
    return (dispatch) => {
        return axios
            .patch(`http://192.168.0.34:5000/api/user/follow/` + followerId, { idToFollow })
            .then((res) => {
                dispatch({ type: FOLLOW_USER, payload: {idToFollow} });
            }
            )
            .catch((err) => console.log(err));
    }
};
export const unfollowUser = (idToUnfollow, followerId) => {
    return (dispatch) => {
        return axios
            .patch(`http://192.168.0.34:5000/api/user/unfollow/` + followerId, { idToUnfollow })
            .then((res) => {
                dispatch({ type: UNFOLLOW_USER, payload: {idToUnfollow} });
            }
            )
            .catch((err) => console.log(err));
    }
};