import "./SidebarChat.css";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import { deleteChat } from "../../store/action/chatActions";
import { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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
      <span>
        {" "}
        <img src={chat.image} />{" "}
      </span>
      <div className="sidebarChat_info">
        <span>
          <h2
            onClick={() => {
              handleClick(chat.id);
            }}
          >
            {chat.name}
          </h2>
          <IconButton onClick={() => dispatch(deleteChat(chat.id))}>
            {" "}
            <HighlightOffIcon />
          </IconButton>
        </span>
        <p>Last message .....</p>
      </div>
      {/* <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div> */}

      {/* <button onClick={() => dispatch(deleteChat(chat.id))}>delete</button> */}
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default ChatItem;
