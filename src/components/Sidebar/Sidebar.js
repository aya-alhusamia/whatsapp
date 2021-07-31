import { useState } from "react";
import Select from "react-select";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import MessageList from "../Chat/MessageList";
import { Button, Modal, Form } from "react-bootstrap";
import ChatList from "./ChatList";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../Chat/Chat";

import { createChat } from "../../store/action/chatActions";

const Sidebar = () => {
  const [filtered, setFiltered] = useState([]);
  const [img, setImg] = useState("");
  const messages = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);
  console.log("messages", messages);

  const handleClick = (id) => {
    setFiltered(MessageList(messages, id));
  };
  console.log(filtered);

  const [show, setShow] = useState(false);

  const [newChat, setNewChat] = useState({
    name: "",
    image: "",
    users: [],
  });

  const _users = useSelector((state) => state.user.allUsers);
  console.log("users from sidebar", _users);

  const _allUsers = _users.map((user) => {
    return { value: user.id, label: user.username };
  });
  const outherUsers=_users.filter((_id)=>_id.id !== _users.id)
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createChat(newChat));
    handleClose();
     setNewChat({
      name: "",
      image: "",
      users: [],
     })
  };

  const handleImage = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    setNewChat({ ...newChat, image: event.target.files[0] });
  };

  const handleChange = (event) => {
    setNewChat({
      ...newChat,
      users: [...newChat.users, event[event.length - 1].value],
    });

    console.log(newChat);
  };

  const handleInputChange = (event) => {
    setNewChat({
      ...newChat,
      [event.target.name]: event.target.value,
    });

    console.log(newChat);
  };
 
 
  return (
    <div className="sidebar_container">
      <div className="sidebar_rabber">
        <div className="sidebar_header">
          <Avatar />
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton onClick={handleShow}>
              <ChatIcon />
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
          <ChatList handleClick={handleClick} />
        </div>
      </div>
      <div className="groups">
        <div
          style={{
            position: "fixed",
            zIndex: 2,
            marginBottom: "7px",
            backgroundColor: "darkcyan",
          }}
        ></div>
        {filtered.length > 0 ? (
          <Chat filtered={filtered} />
        ) : (
          <Modal show={show} onHide={handleClose}>
            <Modal.Title>Create Chat</Modal.Title>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Label>contact</Form.Label>
                {console.log(_allUsers, "_allUsers")}
                <Select
                  isMulti
                  name="users"
                  value={_allUsers}
                  className="basic-multi-select optselect"
                  classNamePrefix="select"
                  onChange={handleChange}
                >
                  {_allUsers.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.label}
                    </option>
                  ))}
                </Select>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="group name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Chat Image</Form.Label>
                  <Form.Control
                    name="image"
                    type="file"
                    onChange={handleImage}
                    placeholder="chat Image"
                  />
                  <img src={img} />
                </Form.Group>

                <Modal.Footer>
                  <button className="btn secondary btn-primary" type="submit">
                    {" "}
                    Start a Chat
                  </button>

                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
