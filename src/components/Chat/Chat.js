import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useEffect, useState } from "react";
import "./Chat.css";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../store/action/messageActions";

function Chat({ filtered }) {
  const users = useSelector((state) => state.user.user);
  console.log(users);
  const id = filtered.map((f) => f.chatId);
  console.log(filtered);
  const [seed, setSeed] = useState("");

  const [input, setInput] = useState({
    message: "",
    name: users.username,
    received: true,
    timestamp: new Date().toISOString().slice(0, 10),
    chatId: id[0],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  // const sendMessage = async (event) => {
  //     event.preventDefault()
  //     dispatch(createMessage(input))

  // }
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMessage(input));
    console.log("hello", filtered.chatId);
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{filtered[0].name}</h3>
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
      <div className="chat_body">
        {filtered.map((message) => (
          <p className={`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
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
  );
}

export default Chat;
