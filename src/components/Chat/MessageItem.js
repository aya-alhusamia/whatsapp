import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";

const MessageItem = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div>
     <p className={`chat_message ${message.received && "chat_receiver"}`}>
     <span className="chat_name">{message.name}</span>
     {message.message}
     <span className="chat_timestamp">{message.timestamp}</span>
     <button onClick={() => dispatch(deleteMessage(message.id))}> delete</button>
   </p>
   </div>
  );
};

export default MessageItem;
