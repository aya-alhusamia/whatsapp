import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Chat from "../Chat/Chat";
import ChatList from "./ChatList";

//Style
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, Modal, Form } from "react-bootstrap";
import "./Sidebar.scss";

//Action
import { createChat, fetchChats } from "../../store/action/chatActions";
//Form
import Select from "react-select";
//Voic
import { Howl } from "howler";
import win from "../../Audio/win.mp3";
import win2 from "../../Audio/win2.mp3";
const Sidebar = () => {

  const [img, setImg] = useState("");

  const messages = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);
  const [chatId, setChatId] = useState(chats[0].id)



  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const [newChat, setNewChat] = useState({
    name: "",
    image: "",
  });

  const _users = useSelector((state) => state.user.allUsers);


  const handleClick = (id) => {
    setChatId(id);
  };


  const _allUsers = _users.map((user) => {
    return { value: user.id, label: user.username };
  });


  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchChats()
    )
  }, [newChat])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createChat(newChat, users));
    handleClose();
    setNewChat({
      name: "",
      image: "",
    });
    dispatch(fetchChats())
    setUsers([]);
  };

  const handleImage = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    setNewChat({ ...newChat, image: event.target.files[0] });
  };

  const handleChange = (event) => {
    if (event[event.length - 1]) {
      setUsers([...users, event[event.length - 1].value]);
    }
  };

  const handleInputChange = (event) => {
    setNewChat({
      ...newChat,
      [event.target.name]: event.target.value,
    });


  };

  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  let sound = win;
  let sound2 = win2;
  const SondPlay = (src) => {
    const s = new Howl({ src });
    s.play();
  }
  return (
    <div className="sidebar_container">
      <div className="sidebar_rabber">
        <div className="sidebar_header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebar_headerRight">
            <IconButton onClick={() => SondPlay(sound)}>
              <DonutLargeIcon />
            </IconButton>
            <IconButton onClick={handleShow}>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon onClick={() => SondPlay(sound2)} />
            </IconButton>
          </div>
        </div>
        {/* <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div> */}
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

        <Chat chatId={chatId} />

        {/* <ModalForm show={show} /> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Title>Create Chat</Modal.Title>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Label>contact</Form.Label>

              <Select
                isMulti
                name="users"
                // value={_allUsers}
                options={_allUsers}
                className="basic-multi-select optselect"
                classNamePrefix="select"
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                onChange={(event) => handleChange(event)}
              ></Select>
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
                <button
                  className="btn secondary btn-primary"
                  type="submit"
                  onClick={handleChange}
                >
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

      </div>
    </div>
  );
};
export default Sidebar;
