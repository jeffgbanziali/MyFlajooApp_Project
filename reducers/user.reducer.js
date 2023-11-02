import {
    GET_USER,
    SIGNIN_USER,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    LOGOUT_USER,
    UPLOAD_PICTURE,
    UPDATE_BIO,
    SEARCH_USERS,
    FOLLOW_USER,
    UNFOLLOW_USER,
} from '../actions/user.action';

const initialState = {}; // initial state

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case SIGNIN_USER:
            return {
                ...state,
                isLoading: true, // You may want to set a loading flag for the sign-in process
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...action.payload, // Assuming your sign-in payload includes user data
            };
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        case LOGOUT_USER:
            return initialState;
        case UPLOAD_PICTURE:
            return {
                ...state,
                picture: action.payload,
            };
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload,
            };
        case FOLLOW_USER:
            return {
                ...state,
                following: [action.payload.idToFollow, ...state.following],
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                following: state.following.filter((id) => id !== action.payload.idToUnfollow),
            };
        case SEARCH_USERS:
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
}
