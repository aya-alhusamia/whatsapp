import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";
import { IconButton } from "@material-ui/core";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import './Chat.css'
const MessageItem = ({ message }) => {
  const dispatch = useDispatch();
  return (

    <div className="contan">
      <p className={`chat_message ${message.received && "chat_receiver"}`}>
        <span className="chat_name">
          {message.name}

        </span>
        {message.message}
        <span className="chat_timestamp">{message.timestamp}</span>
        {/* <button onClick={() => dispatch(deleteMessage(message.id))}> delete</button> */}
        <IconButton onClick={() => dispatch(deleteMessage(message.id))} ><DeleteSweepIcon /> </IconButton>

      </p>

    </div>

  );
};

export default MessageItem;
