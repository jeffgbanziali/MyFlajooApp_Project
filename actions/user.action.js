import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";


export const getUser = (uid) => {
    return (dispatch) => {
        return axios
<<<<<<< HEAD
            .get(`http://192.168.0.40:5000/api/user/${uid}`)
=======
            .get(`http://10.3.206.20:5000/api/user/${uid}`)
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios
<<<<<<< HEAD
            .post("http://192.168.0.40:5000/api/user/upload", data)
            .then((res) => {
                return axios // return axios to chain the two requests
                    .get(`http://192.168.0.40:5000/api/user/${id}`)
=======
            .post("http://10.3.206.20:5000/api/user/upload", data)
            .then((res) => {
                return axios // return axios to chain the two requests
                    .get(`http://10.3.206.20:5000/api/user/${id}`)
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
            .put(`http://192.168.0.40:5000/api/user/` + userId, { bio })
=======
            .put(`http://10.3.206.20:5000/api/user/` + userId, { bio })
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            .then((res) => {
                dispatch({ type: UPDATE_BIO, payload: bio });
            }
            )
            .catch((err) => console.log(err));
    }
};

export const followUser = (followerId, idToFollow) => {
    return (dispatch) => {
        return axios({
            method: "patch",
<<<<<<< HEAD
            url: `http://192.168.0.40:5000/api/user/follow/` + followerId,
=======
            url: `http://localhost:5000/api/user/follow/` + followerId,
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            data: { idToFollow },
        })
            .then((res) => {
                dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
            })
            .catch((err) => console.log(err));
    };
};

export const unfollowUser = (followerId, idToUnfollow) => {
    return (dispatch) => {
        return axios({
            method: "patch",
<<<<<<< HEAD
            url: `http://192.168.0.40:5000/api/user/unfollow/` + followerId,
=======
            url: `http://localhost:5000/api/user/unfollow/` + followerId,
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            data: { idToUnfollow },
        })
            .then((res) => {
                dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
            })
            .catch((err) => console.log(err));
    };
};



