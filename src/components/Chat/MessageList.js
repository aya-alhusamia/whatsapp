import { useSelector } from "react-redux";
//Components
import MessageItem from "./MessageItem";
//Styling
import "./Chat.css";

const MessageList = ({ chatId }) => {
  const messages = useSelector((state) => state.messages.messages);
  const messageList = messages
    .filter((message) => message.chatId === chatId)
    .map((message) => <MessageItem message={message} key={message.id} />);

  return (
    <div className="body2">
      <div className="chat_body">
        {messageList.length === 0
          ? "please start your conversation"
          : messageList}
      </div>
    </div>
  );
};

export default MessageList;
