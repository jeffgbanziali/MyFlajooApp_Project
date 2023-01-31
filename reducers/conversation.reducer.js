import { FETCH_CONVERSATIONS, GET_MESSAGE } from "../actions/conversation.action";


const initialState = {}; // initial state

export default function conversationReducer(state = initialState, action) {

    switch (action.type) {
        case GET_MESSAGE:
            return action.payload;
        case FETCH_CONVERSATIONS:
            return {
                ...state,
                conversation: action.payload
            }
        default:
            return state;
    }
}