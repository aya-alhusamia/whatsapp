import { useDispatch, useSelector } from "react-redux";

//components
import { deleteChat } from "../../store/action/chatActions";

//styling
import "./SidebarChat.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";

const ChatItem = ({ chat, addNewChat, handleClick }) => {
   const dispatch = useDispatch();

  

  return (
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
    </div>
  ) 
};

export default ChatItem;
