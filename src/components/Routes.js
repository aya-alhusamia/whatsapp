
//components
// import MessageList from "./Message/MessageList";
// import ChatList from "./Chat/ChatList";
// import ChatDetail from "./Chat/ChatDetail";
import SignUp from "./Authencation/Signup";
import SignIn from "./Authencation/Signin";

import { Route, Switch } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

function Routes(props) {
    return (
        <Switch>
           
            <Route path="/signup">
                <SignUp />
                </Route>
                {/* <Route path="/chats/:chatId">
        <ChatDetail />
      </Route> */}
      {/* <Route path="/messages">
        <MessageList messages={props.messages} />
      </Route> */}
      <Route path="/chats">
        <Sidebar />
      </Route>
       
           
            <Route exact path="/">
                <SignIn />
            </Route>
            
        </Switch>
    )
}

export default Routes
