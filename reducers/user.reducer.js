import { GET_USER, UPLOAD_PICTURE, UPDATE_BIO } from '../actions/user.action';


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
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload
            }
        default:
            return state;
    }
}