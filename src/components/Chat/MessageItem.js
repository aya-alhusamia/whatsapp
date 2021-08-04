import { useDispatch } from "react-redux";

//Components
import { deleteMessage } from "../../store/action/messageActions";

//Styling
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
const MessageItem = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div className="contan">
      <p className={`chat_message ${message.received && "chat_receiver"}`}>
        <span className="chat_name">{message.name}</span>
        {message.message}
        {/* <span className="chat_name">{message.image}</span> */}
        {message.image && <img src={message.image} width="50px" />}
        <span className="chat_timestamp">{message.timestamp}</span>

        <IconButton onClick={() => dispatch(deleteMessage(message.id))}>
          <DeleteSweepIcon />{" "}
        </IconButton>
      </p>
    </div>
  );
};

export default MessageItem;
