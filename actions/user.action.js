import axios from 'axios';

export const GET_USER = "GET_USER";


export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://192.168.0.34:5000/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
}