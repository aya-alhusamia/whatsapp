import { useState } from "react";
import MessageItem from "./MessageItem";


const MessageList = (messages,id) => {
  // const [query, setQuery] = useState("");

  console.log(messages)
  console.log(id)
  let filtered = messages
    .filter((message) =>
      message.chatId=== id
    )
    //;
  console.log(filtered)
  return (
    
    filtered
    
  );
};

export default MessageList;
