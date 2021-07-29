
import { useParams, Redirect, Link } from "react-router-dom";
import MessageList from "../Message/MessageList";
import { useSelector } from "react-redux";


const ChatDetail = () => {
  const chatId = useParams().chatId;
  console.log(useParams().chatId);
  
  const chats = useSelector((state) => state.chats.chats);
  console.log("hello" ,chats)
  const chat = chats.find((chat) => chat.id === chatId);
  console.log(chat)
  if (!chat) return <Redirect to="/" />;

  return (
    <div>
      <div>
        <h1>{chat.name}</h1>
        <image src={chat.image} alt={chat.name} />
        <Link to="/chats">
          <button>Back</button>
        </Link>
         <Link to={`/chats/${chat.id}/messages/new`}>
          <button>add chat</button>
        </Link>
      </div>
      <div >
        <MessageList messages={chat.messages} />
      </div>
    </div>
  );
};

export default ChatDetail;
