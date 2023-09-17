import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://192.168.0.14:3000/api/user');
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };
};
