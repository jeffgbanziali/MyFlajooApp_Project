import axios from "axios"

export const GET_USERS = "GET_USERS"

export const getUsers = () => {
    return (dispatch) => {
        return axios
<<<<<<< HEAD
            .get(`http://192.168.0.40:5000/api/user `)
=======
            .get(`http://10.3.206.20:5000/api/user `)
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
            .then((res) => {
                dispatch({
                    type: GET_USERS,
                    payload: res.data
                });
            })
            .catch((err) => console.log(err));
    }
};