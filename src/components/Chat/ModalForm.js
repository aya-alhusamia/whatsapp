import { render } from "react-dom";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { useSelector, useDispatch } from "react-redux";
import { createChat } from "../../store/action/chatActions";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalForm = () => {
  const [multiValue, setMultiValue] = useState([]);
  const [form, setForm] = useState({
    name: "",
    image: "",
    users: [],
  });
  const _users = useSelector((state) => state.user.allUsers);
  console.log("users from sidebar", _users);

  const _allUsers = _users.map((user) => {
    return { value: user.id, label: user.username };
  });
  const outherUsers = _users.filter((_id) => _id.id !== _users.id);
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
    });
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
  );
};
export default ModalForm;
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       multiValue: [],
//       filterOptions: [
//         { value: "foo", label: "Foo" },
//         { value: "bar", label: "Bar" },
//         { value: "bat", label: "Bat" }
//       ]
//     };

//     this.handleMultiChange = this.handleMultiChange.bind(this);
//   }

//   handleMultiChange(option) {
//     this.setState(state => {
//       return {
//         multiValue: option
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <label>Multi (now working)</label>
//         <Select
//           name="filters"
//           placeholder="Filters"
//           value={this.state.multiValue}
//           options={this.state.filterOptions}
//           onChange={this.handleMultiChange}
//           multi
//         />
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));
