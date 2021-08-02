import { fetchMessages } from "../../store/action/messageActions";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = ({ chatId }) => {
  const messages = useSelector((state) => state.messages.messages);

  const messageList = messages
    .filter((message) => message.chatId === chatId)
    .map((message) => <MessageItem message={message} key={message.id} />);
  console.log(messageList);

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
