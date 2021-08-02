import { Route, Switch } from "react-router";

// Components
import SignUp from "./Authencation/Signup";
import SignIn from "./Authencation/Signin";
import Sidebar from "./Sidebar/Sidebar";
import MessageList from "./Chat/MessageList";
// REVIEW: Remove commented out code
// Organize your imports

function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      {/* <Route path="/chats/:chatId">
        <ChatDetail />
      </Route> */}
      {/* Are you using this route? */}
      <Route path="/messages">
        <MessageList />
      </Route>
      <Route path="/chats">
        <Sidebar />
      </Route>

      <Route exact path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default Routes;
