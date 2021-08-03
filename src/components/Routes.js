import { Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import SignIn from "./Authentication/Signin";
import Sidebar from "./Sidebar/Sidebar";
import MessageList from "./Chat/MessageList";
import FourOfour from "./FourOFour/FourOfour";

function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/messages">
        <MessageList />
      </Route>
      <Route path="/chats">
        <Sidebar />

      </Route>

      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/aya">
        <FourOfour />
      </Route>
    </Switch>
  );
}

export default Routes;
