import * as actionTypes from "../action/types";

const initialState = {
    messages: [],
    loading: true,
};
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_MESSAGE:
            const keepMessage = state.messages.filter(
                (message) => message.id !== action.payload.messageId
            );
            return {
                ...state,
                messages: keepMessage,
            };
        case actionTypes.CREATE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        case actionTypes.FETCH_MESSAGE:
            return {
                ...state,
                messages: action.payload,
                loading: false,
            };
            // case actionTypes.FETCH_FILTERED_MESSAGE:
            // const keepMessage = state.messages.filter(
            //     (message) => message.chatId === action.payload.chatId
            // );
            // return {
            //     ...state,
            //     messages: keepMessage,
            // };
        default:
            return state;
    }
};
export default messageReducer;