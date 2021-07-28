import * as actionTypes from "../action/types";

const initialState = {
    chats: [],
    loading: true,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_CHAT:
            const keepChat = state.chats.filter(
                (chat) => chat.id !== action.payload.chatId
            );
            return {
                ...state,
                chats: keepChat,
            };
        case actionTypes.FETCH_CHAT:
            return {
                ...state,

                chats: action.payload,
                loading: false,
            };

        case actionTypes.CREATE_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload],
            };
        default:
            return state;
    }
};
export default chatReducer;