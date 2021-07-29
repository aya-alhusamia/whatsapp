
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from "./components/Chat/Chat"
import Routes from './components/Routes';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import instance from './store/action/instance';

function App() {
  // const [messages, setMessages] = useState({})

  // useEffect(() => {
  //   instance.get("/messages/sync").then((response) => {
  //     setMessages(response.data)
  //   })
  // }, [])


  // useEffect(() => {
  //   const pusher = new Pusher('4af99bfc517011b518e0', {
  //     cluster: 'eu'
  //   });

  //   const channel = pusher.subscribe('messages');
  //   channel.bind('inserted', (newMessage) => {
  //     setMessages([...messages, newMessage])
  //   });

  //   return () => {
  //     channel.unbind_all()
  //     channel.unsubscribe()
  //   }

  // }, [messages])
  return (
    <div className="app">
      <div className="app_body">
        <Routes />
        {/* <Sidebar />
        <Chat/> */}
       
      </div>
    </div>
  );
}

export default App;
