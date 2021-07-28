import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import messageReducer from "./reducers/messageReducer";
import chatReducer from "./reducers/chatReducer";
import { fetchMessages } from "./action/messageActions";
import { fetchChats } from "./action/chatActions";
const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
  chats: chatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchMessages())
store.dispatch(fetchChats())
export default store;

