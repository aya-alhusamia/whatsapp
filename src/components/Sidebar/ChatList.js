import { useState } from "react";
import ChatItem from "./ChatItem";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
const ChatList = ({ handleClick }) => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chats.chats);
  // let filtered = chats
  //   .filter((chat) => chat.name.toUpperCase().includes(query.toUpperCase()))
  const chatList = chats.map((chat) => (
    <ChatItem chat={chat} handleClick={handleClick} key={chat.id} />
  ));
  return (
    <>
      <Searchbar setQuery={setQuery} />
      {/* What is addNewChat? */}
      <div addNewChat>{chatList}</div>
    </>
  );
};

export default ChatList;
