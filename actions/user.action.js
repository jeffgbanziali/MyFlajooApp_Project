import axios from 'axios';
import { APP_API_URL } from '../config';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GET_USER = "GET_USER";
export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const SEARCH_USERS = "SEARCH_USERS";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${APP_API_URL}/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};


export const logoutUser = () => {
    return async (dispatch) => {
        try {
            await axios.get(`${APP_API_URL}/api/user/logout`);
            dispatch({ type: LOGOUT_USER });
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };
};

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNIN_USER });

            const response = await axios.post(
                `${APP_API_URL}/api/user/login`,
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                const user = response.data;
                await AsyncStorage.setItem("user", JSON.stringify(user));
                dispatch({ type: SIGNIN_SUCCESS, payload: user });
                alert("User logged in successfully");
            } else {
                if (
                    response.data.errors.email !== "" ||
                    response.data.errors.password !== ""
                ) {
                    dispatch({ type: SIGNIN_FAILURE, payload: response.data.errors });
                    console.log("Sign-in failure with specific errors:", response.data.errors);
                } else {
                    dispatch({ type: SIGNIN_FAILURE, payload: { general: "An error occurred" } });
                    console.log("Sign-in failure with general error");
                }
                alert("An error occurred");
            }
        } catch (error) {
            console.error('Sign-in error:', error);
            dispatch({ type: SIGNIN_FAILURE, payload: { general: "An error occurred" } });
        }
    };
};


export const uploadPicture = (data, id) => {
    return async (dispatch) => {
        try {
            // Uploader l'image
            const uploadResponse = await axios.post(`${APP_API_URL}/api/user/upload`, data);

            // Mettre à jour l'utilisateur après le téléchargement de l'image
            const userResponse = await axios.get(`${APP_API_URL}/api/user/${id}`);

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
            .put(`${Config.APP_API_URL}/api/user/` + userId, { bio })
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
            url: `${APP_API_URL}/api/user/follow/` + followerId,
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
            url: `${APP_API_URL}/api/user/unfollow/` + followerId,
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
            .get(`${APP_API_URL}/api/user/search`)
            .then((res) => {
                dispatch({ type: SEARCH_USERS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

