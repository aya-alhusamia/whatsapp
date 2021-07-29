import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";

const MessageItem = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Link to={`/messages/${props.message.slug}`}>
      
      </Link> */}
      <p>{message.message}</p>
      <p>{message.timestamp} </p>
      <p>{message.user} </p>
      <button onClick={() => dispatch(deleteMessage(message.id))}>
        delete
      </button>
    </div>
  );
};

export default MessageItem;
