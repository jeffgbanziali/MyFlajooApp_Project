import axios from 'axios';
import { APP_API_URL } from '../config';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${APP_API_URL}/api/user`);
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };
};
