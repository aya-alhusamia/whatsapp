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
import MessageList from "./MessageList";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState({
    message: "",
    name: "",
    received: false,
    timestamp: new Date().toISOString().slice(0, 10),
  });
  // const [newMessage , setNewMessage ] = useState({
  //     message: "",
  //     name: "",
  //     received: false,
  //     timestamp:new Date().toISOString().slice(0,10)
  // })
  // const dispatch = useDispatch();
  // const messages = useSelector((state) => state.messages.messages);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  // const sendMessage = async (event) => {
  //     event.preventDefault()
  //     dispatch(createMessage(input))

  // }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
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
        <MessageList />
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
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
