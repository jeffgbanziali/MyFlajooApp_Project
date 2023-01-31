import axios from 'axios';

export const GET_MESSAGE = "GET_MESSAGE";
export const FETCH_CONVERSATIONS = "FETCH_CONVERSATIONS";



export const getMessage = (num) => {
    return (dispatch) => {
        return axios
            .get(`http://http://192.168.0.34:5000/api/message`)
            .then((res) => {
                const array = res.data.slice(0, num);
                dispatch({ type: GET_MESSAGE, payload: array});
            }
            )
            .catch((err) => console.log(err));
    }
};

export const fetchConversations = () => (dispatch) => {
    axios.get('http://http://192.168.0.34:5000/api/conversation'
     )
        .then(res => {
            dispatch({
                type: FETCH_CONVERSATIONS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
};