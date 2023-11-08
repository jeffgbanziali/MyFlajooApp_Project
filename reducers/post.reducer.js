import { GET_POSTS, LIKE_POST, UNLIKE_POST, ADD_COMMENT, CREATE_POST_ERROR } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case LIKE_POST:
            return state.map((post) => {
                if (post._id === action.payload.postId) {
                    return {
                        ...post,
                        likers: [action.payload.userId, ...post.likers]
                    };
                }
                return post;
            });
        case UNLIKE_POST:
            return state.map((post) => {
                if (post._id === action.payload.postId) {
                    return {
                        ...post,
                        likers: post.likers.filter((id) => id !== action.payload.userId)
                    };
                }
                return post;
            });
        case ADD_COMMENT:
            const { postId, commenterId, text, commenterPseudo } = action.payload;
            return state.map((post) => {
                if (post._id === postId) {
                    return {
                        ...post,
                        comments: [{ commenterId, text, commenterPseudo }, ...post.comments]
                    };
                }
                return post;
            });

        case CREATE_POST_ERROR:
            // Gérez l'erreur ici, par exemple, stockez-la dans un champ d'état approprié
            return {
                ...state,
                error: action.payload // Stockez l'erreur dans un champ d'état "error"
            };
        default:
            return state;
    }
}
