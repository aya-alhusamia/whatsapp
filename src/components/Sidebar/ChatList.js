import { useState } from "react";
import { useSelector } from "react-redux";
//Components
import ChatItem from "./ChatItem";
import Searchbar from "./Searchbar";
//Styling
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.scss";

const ChatList = ({ handleClick }) => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chats.chats);
  let filteredChat = chats
    .filter((chat) => chat.name?.toUpperCase().includes(query?.toUpperCase()))
  let chatList = filteredChat.map((chat) => (
    <ChatItem
      chat={chat}
      handleClick={handleClick}
      key={chat.id}
    />

  ));
  return (
    <div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <Searchbar setQuery={setQuery} />
        </div>
      </div>
      <div addNewChat>{chatList}</div>
    </div>

  );
};

export default ChatList;
