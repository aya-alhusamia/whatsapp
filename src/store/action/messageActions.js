import instance from "./instance";
import * as actionTypes from "./types";

export const deleteMessage = (messageId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/messages/${messageId}`);
      dispatch({
        type: actionTypes.DELETE_MESSAGE,
        payload: {
          messageId: messageId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const createMessage = (input, chatId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in input) formData.append(key, input[key]);
      const res = await instance.post(
        // `http://localhost:8000/chats/${chatId}/message`,
        "/messages",
        formData
      );
      dispatch({
        type: actionTypes.CREATE_MESSAGE,
        payload: { input: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/messages");
      dispatch({
        type: actionTypes.FETCH_MESSAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
