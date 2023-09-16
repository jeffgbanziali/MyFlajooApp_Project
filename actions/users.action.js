import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`http://192.168.0.14:3000/api/user `)
      .then(res => {
        dispatch({
          type: GET_USERS,
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }
}
