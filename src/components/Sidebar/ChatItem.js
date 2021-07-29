
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/action/messageActions";
import { deleteChat } from "../../store/action/chatActions";

const ChatItem = ({chat,addNewChat}) => {
  const dispatch = useDispatch();
  const createChat = () => {
    const roomName = prompt("Please enter name for chat")

    if (roomName) {

    }
}
  return !addNewChat ? (
    <div className='sidebarChat'>
      <img src={chat.image}  />
      <div className="sidebarChat_info"> 
      <h2>{chat.name}</h2>
      <p>Last message .....</p>
      </div>
      {/* <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div> */}
  
      <button  onClick={() => dispatch(deleteChat(chat.chat.id))}>delete</button>
       
    </div>
  )
  : (
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>
)
};

export default ChatItem;