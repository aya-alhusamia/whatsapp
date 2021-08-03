import { useSelector, useDispatch, } from "react-redux";
import { useEffect, useState,useRef } from "react";

//Components
import {createMessage, fetchMessages} from "../../store/action/messageActions";
import MessageList from "./MessageList";

//Styling
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InputEmoji from 'react-input-emoji'
import "./Chat.css";



function Chat({  chatId }) {
  const users = useSelector((state) => state.user.user);
  const chats = useSelector((state) => state.chats.chats);
  const thisChat =chats.find((chat)=>chat.id === chatId)
  
  const [seed, setSeed] = useState("");

  const [input, setInput] = useState({
    message: "",
    name: users?.username,
    received: true,
    timestamp: new Date().toISOString().slice(0, 10),
    image: ""
  });
 
  const dispatch = useDispatch();

  useEffect(()=> {
  
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
    event?.preventDefault();
    const newMessage= {...input, chatId:chatId}
    dispatch(createMessage(newMessage));
    setInput({...input, message: ""});
    dispatch(fetchMessages())
   

    
  };
const handleEnter=()=>{
dispatch(createMessage({input}))
  // setInput({...input,message:"message"})
}
const handleAttachment=(event)=>{
dispatch(createMessage({...input,image:event.target.files[0]}))
handleSubmit()
}
const inputFile = useRef(null) 

const onButtonClick = () => {
  // `current` points to the mounted file input element
 inputFile.current.click();
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
            <div  >
            <form onSubmit= {handleSubmit}>
            <AttachFile onClick={onButtonClick}/>
            <input type='file' id='file' onChange={handleAttachment} ref={inputFile} style={{display: 'none'}}/>
            </form>
            </div>
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
        <form   onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Type a message"
            type="text"
            name="message"
            value={input.message}
          />
          
          {/* <InputEmoji
          name="input"
              value={input.message}
              onChange={setInput}
              cleanOnEnter
              onEnter={handleEnter}
              placeholder="Type a message"
            /> */}
          <button
            // onClick={sendMessage}
            type="submit"
          >
            Send a message
          </button> 
          <IconButton>
          <MicIcon />
          </IconButton>
        </form>
      
      </div>
    </div>
    </div>
  );
}

export default Chat;
