import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useEffect, useState } from "react";
import "./Chat.css";
import { useSelector, useDispatch } from "react-redux";
import {
  createMessage,
  deleteMessage,
  fetchMessages,
} from "../../store/action/messageActions";
import MessageItem from "./MessageItem";
import MessageList from "./MessageList";

function Chat({ filtered, chatId }) {
  const users = useSelector((state) => state.user.user);
  const chats = useSelector((state) => state.chats.chats);
  const thisChat =chats.find((chat)=>chat.id === chatId)
  
  const [seed, setSeed] = useState("");

  const [input, setInput] = useState({
    message: "",
    name: users?.username,
    received: true,
    timestamp: new Date().toISOString().slice(0, 10),
    
  });
 
  const dispatch = useDispatch();

  useEffect(()=> {
    console.log("we are here")
    dispatch(fetchMessages()
    )
         
  
   }, [input]);

  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage= {...input, chatId:chatId}
    dispatch(createMessage(newMessage));
    setInput({message: ""});
    console.log("hello", filtered.chatId);
  };

  return (
    <div className= "cont">
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{thisChat?.name}</h3>
          <p>Last Seen at ....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="body2">
        <MessageList chatId={chatId}/>
      {/* <div className="chat_body">
        {filtered.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
      </div> */}
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Type a message"
            type="text"
            name="message"
            value={input.message}
          />
          <button
            // onClick={sendMessage}
            type="submit"
          >
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
    </div>
  );
}

export default Chat;
