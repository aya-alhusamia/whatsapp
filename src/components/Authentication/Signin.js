import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

//Components
import { signin } from "../../store/action/userActions";

//Styling
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../../styles";
import './style.scss'

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pass, setpass] = useState("password");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [focus, setFocus] = useState("")
  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };



  return (
    <div className="c-panda">
      {/* <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <UserForm onSubmit={handleSubmit}>
              <h1 className="mb-5">Sign in</h1>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                />
                <span class="input-group-text" id="basic-addon2">
                  <FiUser size="1.5em" />
                </span>{" "}
              </div>
              <div class="input-group mb-3">
                <input
                  type={pass}
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                />
                <span class="input-group-text" id="basic-addon2">
                  {pass === "password" ? (
                    <AiFillEye size="1.5em" onClick={showPass} />
                  ) : (
                    <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                  )}
                </span>{" "}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
              >
                Sign in
              </button>
            </UserForm>
          </div>
          <div className="col-4"></div>
          <p>dont have accout! please sign up  <Link to="/signup" >
            here
          </Link></p>
        </div>

      </div> */}
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={focus}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Login</h1>
        <div className="form-group">
          <input required="required"
            className="form-control"
            onChange={handleChange}
            value={user.username}
            name="username" />
          <label className="form-label">Username  </label>
        </div>
        <div className="form-group">
          <input id="password"
            onFocus={() => setFocus("up")}
            onBlur={() => setFocus("")}
            type="password"
            required="required"
            className="form-control"
            onChange={handleChange}
            value={user.password}
            name="password" />
          <label className="form-label">Password</label>
          <button className="btn" type="submit">Login </button>
        </div>
      </form>
      <p>dont have accout! please sign up  <Link to="/signup" >
        here
      </Link></p>
    </div>
  );
};

export default SignIn;