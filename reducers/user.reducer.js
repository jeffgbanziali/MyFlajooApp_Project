import { GET_USER, UPLOAD_PICTURE } from '../actions/user.action';


const initialState = {}; // initial state


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case UPLOAD_PICTURE:
            return {
                ...state,
                picture: action.payload
            }
        default:
            return state;
    }
}