import * as actionType from "../action/types";
const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
