import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";
import './Chat.css'
import { IconButton } from "@material-ui/core";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
const MessageItem = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div className="contan">
     <p className={`chat_message ${message.received && "chat_receiver"}`}>
     <span className="chat_name">{message.name}</span>
     {message.message}
     <span className="chat_timestamp">{message.timestamp}</span>
     <IconButton onClick={() => dispatch(deleteMessage(message.id))} ><DeleteSweepIcon /> </IconButton>
     {/* <button onClick={() => dispatch(deleteMessage(message.id))}> delete</button> */}
   </p>
   </div>
  );
};

export default MessageItem;
