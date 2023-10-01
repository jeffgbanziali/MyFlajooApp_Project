import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const SEARCH_USERS = "SEARCH_USERS";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.14:4000/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const uploadPicture = (data, id) => {
    return async (dispatch) => {
        try {
            // Uploader l'image
            const uploadResponse = await axios.post("http://192.168.0.14:4000/api/user/upload", data);

            // Mettre à jour l'utilisateur après le téléchargement de l'image
            const userResponse = await axios.get(`http://192.168.0.14:4000/api/user/${id}`);

            // Dispatch des actions avec les données mises à jour
            dispatch({ type: UPLOAD_PICTURE, payload: userResponse.data.picture });
        } catch (error) {
            console.error('Erreur lors du téléchargement de l\'image:', error);
        }
    }
};

export const updateBio = (bio, userId) => {
    return (dispatch) => {
        const data = bio
        return axios
            .put(`http://192.168.0.14:4000/api/user/` + userId, { bio })
            .then((res) => {
                dispatch({ type: UPDATE_BIO, payload: bio });
            })
            .catch((err) => console.log(err));
    }
};

export const followUser = (followerId, idToFollow) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://192.168.0.14:4000/api/user/follow/` + followerId,
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
            url: `http://192.168.0.14:4000/api/user/unfollow/` + followerId,
            data: { idToUnfollow },
        })
            .then((res) => {
                dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
            })
            .catch((err) => console.log(err));
    };
};


export const searchUsers = () => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.14:4000/api/user/search`)
            .then((res) => {
                dispatch({ type: SEARCH_USERS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

