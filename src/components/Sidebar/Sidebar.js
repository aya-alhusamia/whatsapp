import { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import './Sidebar.css'
import MessageList from "../Chat/MessageList";
import ChatList from "./ChatList"
import {  useSelector } from "react-redux";
import Chat from "../Chat/Chat"

const Sidebar = () => {
  const [filtered,setFiltered]=useState([])
  const messages = useSelector((state) => state.messages.messages);
  console.log("messages",messages)
  // const chats = useSelector((state) => state.chats.chats);
  // const dispatch = useDispatch();
  const handleClick= (id)=>{
    setFiltered(MessageList(messages,id))
  }
  console.log(filtered)
  return (
    <div className="sidebar_container">
    <div className="sidebar_rabber">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton onClick={()=>prompt("hii")}> 
            <ChatIcon  />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>

      </div>
      <div className="sidebar_chats">
        {/* <SidebarChat addNewChat /> */}
       <ChatList handleClick={handleClick}/>
      </div>
      
    </div>
   {filtered.length>0 && <Chat filtered={filtered}/>}
    </div>
   
  );
};
export default Sidebar;