import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";
import { deleteChat } from "../../store/action/chatActions";
import { useState } from "react";
import MessageList from "../Chat/MessageList";
import ModalChat from "./Modal";

const ChatItem = ({ chat, addNewChat, handleClick }) => {
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <img src={chat.image} onClick={<ModalChat />} />
      <div className="sidebarChat_info">
        <h1
          onClick={() => {
            handleClick(chat.id);
          }}
        >
          {chat.name}
        </h1>
        <p>Last message .....</p>
      </div>
      {/* <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div> */}

      <button onClick={() => dispatch(deleteChat(chat.chat.id))}>delete</button>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default ChatItem;
