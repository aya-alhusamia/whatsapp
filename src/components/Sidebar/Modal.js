// import { Select } from "@material-ui/core";
// import { useState } from "react";
// import { Button, Modal, Form, FormGroup } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { createChat } from "../../store/action/chatActions";
// import { BiCommentAdd } from "@react-icons/all-files/bi/BiCommentAdd";
// const ModalChat = () => {
//   const [show, setShow] = useState(false);
//   const [newChat, setNewChat] = useState({
//     users: [],
//   });

//   const _users = useSelector((state) => state.user.user);
//   console.log(_users);
//   //   const usersList = _users.map((user) => {
//   //     return { value: user.id, label: user.username };
//   //   });

//   const dispatch = useDispatch();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(createChat(newChat));
//     handleClose();
//   };

//   const handleChange = (event) => {
//     setNewChat({
//       ...newChat,
//       users: [...newChat.users, event[event.length - 1].value],
//     });

//     console.log(newChat);
//   };

//   const handleInputChange = (event) => {
//     setNewChat({
//       ...newChat,
//       [event.target.name]: event.target.value,
//     });

//     console.log(newChat);
//   };
//   return (
//     <div className="groups">
//       <div
//         style={{
//           position: "fixed",
//           zIndex: 2,
//           marginBottom: "7px",
//           backgroundColor: "darkcyan",
//         }}
//       >
//         <span style={{ color: "white" }}>
//           <BiCommentAdd color="black" size="2em" onClick={handleShow} />
//         </span>
//         Your Groups
//         <br />
//       </div>
//       <>
//         {groupList}

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Label>contact</Form.Label>
//               <Select
//                 isMulti
//                 name="users"
//                 //   options={usersList}
//                 className="basic-multi-select optselect"
//                 classNamePrefix="select"
//                 onChange={handleChange}
//                 //  value={selectedOptions}
//               />
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Group Name</Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   onChange={handleInputChange}
//                   placeholder="group name"
//                 />
//               </Form.Group>

//               <Modal.Footer>
//                 <button className="btn secondary btn-primary" type="submit">
//                   {" "}
//                   Start a Chat
//                 </button>

//                 <Button variant="secondary" onClick={handleClose}>
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </Form>
//           </Modal.Body>
//         </Modal>
//       </>
//     </div>
//   );
// };
// export default ModalChat;
