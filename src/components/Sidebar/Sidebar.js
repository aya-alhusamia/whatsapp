import { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import './Sidebar.css'

import ChatList from "./ChatList"
const Sidebar = () => {
  // const chats = useSelector((state) => state.chats.chats);
  // const dispatch = useDispatch();
  return (
    <div className="sidebar">
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
       <ChatList/>
      </div>
    </div>
  );
};
export default Sidebar;