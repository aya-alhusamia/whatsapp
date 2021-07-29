import { useState } from "react";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";


const MessageList = () => {
  const [query, setQuery] = useState("");
  const messages = useSelector((state) => state.messages.messages);
  let filtered = messages
    .filter((messages) =>
      messages.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((message) => (
      <MessageItem
        message={message}
        
        key={message.id}
        
      />
    ));
  return (
    <>
     
      <div>{filtered}</div>
    
    </>
  );
};

export default MessageList;
