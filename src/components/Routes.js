import { Route, Switch } from "react-router";
import SignUp from "./Authencation/Signup";
import SignIn from "./Authencation/Signin";
function Routes() {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
        </Switch>
    )
}

export default Routes
