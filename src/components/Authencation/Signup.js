
import { useState } from "react";
import { AiFillEye, AiFillPhone } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../../styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../store/action/userActions";
import img1 from "../../assets/images/img1.svg"
import './style.scss'
import { left } from "@popperjs/core";


const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pass, setPass] = useState("password");
  const [user, setUser] = useState({
    username: "",
    mobile: "",
    password: "",
  });
  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  const showPass = () => {
    pass === "password" ? setPass("text") : setPass("password");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  // animation
  // let activeElement, curEmailIndex, screenCenter, svgCoords, emailCoords, emailScrollMax, chinMin = .5, dFromC, mouthStatus = "small", blinking, eyeScale = 1, eyesCovered = false, showPasswordClicked = false;
  // let eyeLCoords, eyeRCoords, noseCoords, mouthCoords, eyeLAngle, eyeLX, eyeLY, eyeRAngle, eyeRX, eyeRY, noseAngle, noseX, noseY, mouthAngle, mouthX, mouthY, mouthR, chinX, chinY, chinS, faceX, faceY, faceSkew, eyebrowSkew, outerEarX, outerEarY, hairX, hairS;

  // function calculateFaceMove(e) {
  //   let
  //     carPos = email.selectionEnd,
  //     div = document.createElement('div'),
  //     span = document.createElement('span'),
  //     copyStyle = getComputedStyle(email),
  //     caretCoords = {}
  //     ;
  //   if (carPos == null || carPos == 0) {
  //     // if browser doesn't support 'selectionEnd' property on input[type="email"], use 'value.length' property instead
  //     carPos = email.value.length;
  //   }
  //   [].forEach.call(copyStyle, function (prop) {
  //     div.style[prop] = copyStyle[prop];
  //   });
  //   div.style.position = 'absolute';
  //   document.body.appendChild(div);
  //   div.textContent = email.value.substr(0, carPos);
  //   span.textContent = email.value.substr(carPos) || '.';
  //   div.appendChild(span);

  //   if (email.scrollWidth <= emailScrollMax) {
  //     caretCoords = getPosition(span);
  //     dFromC = screenCenter - (caretCoords.x + emailCoords.x);
  //     eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
  //     eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
  //     noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
  //     mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
  //   } else {
  //     eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
  //     eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
  //     noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
  //     mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
  //   }

  //   eyeLX = Math.cos(eyeLAngle) * 20;
  //   eyeLY = Math.sin(eyeLAngle) * 10;
  //   eyeRX = Math.cos(eyeRAngle) * 20;
  //   eyeRY = Math.sin(eyeRAngle) * 10;
  //   noseX = Math.cos(noseAngle) * 23;
  //   noseY = Math.sin(noseAngle) * 10;
  //   mouthX = Math.cos(mouthAngle) * 23;
  //   mouthY = Math.sin(mouthAngle) * 10;
  //   mouthR = Math.cos(mouthAngle) * 6;
  //   chinX = mouthX * .8;
  //   chinY = mouthY * .5;
  //   chinS = 1 - ((dFromC * .15) / 100);
  //   if (chinS > 1) {
  //     chinS = 1 - (chinS - 1);
  //     if (chinS < chinMin) {
  //       chinS = chinMin;
  //     }
  //   }
  //   faceX = mouthX * .3;
  //   faceY = mouthY * .4;
  //   faceSkew = Math.cos(mouthAngle) * 5;
  //   eyebrowSkew = Math.cos(mouthAngle) * 25;
  //   outerEarX = Math.cos(mouthAngle) * 4;
  //   outerEarY = Math.cos(mouthAngle) * 5;
  //   hairX = Math.cos(mouthAngle) * 6;
  //   hairS = 1.2;

  //   TweenMax.to(eyeL, 1, { x: -eyeLX, y: -eyeLY, ease: Expo.easeOut });
  //   TweenMax.to(eyeR, 1, { x: -eyeRX, y: -eyeRY, ease: Expo.easeOut });
  //   TweenMax.to(nose, 1, { x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut });
  //   TweenMax.to(mouth, 1, { x: -mouthX, y: -mouthY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut });
  //   TweenMax.to(chin, 1, { x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut });
  //   TweenMax.to(face, 1, { x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: "center top", ease: Expo.easeOut });
  //   TweenMax.to(eyebrow, 1, { x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut });
  //   TweenMax.to(outerEarL, 1, { x: outerEarX, y: -outerEarY, ease: Expo.easeOut });
  //   TweenMax.to(outerEarR, 1, { x: outerEarX, y: outerEarY, ease: Expo.easeOut });
  //   TweenMax.to(earHairL, 1, { x: -outerEarX, y: -outerEarY, ease: Expo.easeOut });
  //   TweenMax.to(earHairR, 1, { x: -outerEarX, y: outerEarY, ease: Expo.easeOut });
  //   TweenMax.to(hair, 1, { x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut });

  //   document.body.removeChild(div);
  // };





  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <form onSubmit={handleSubmit}>
              <h1 className="mb-5">Sign up</h1>
              <div className="svgContainer">
                <div>
                  <img src={img1} alt="img1" />
                </div>
              </div>

              {/* <div class="input-group mb-3">
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
              </div> */}
              {/* <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Mobile"
                  aria-label="Mobile"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.mobile}
                  name="mobile"
                />
                <span class="input-group-text" id="basic-addon2">
                  <AiFillPhone size="1.5em" />
                </span>{" "}
              </div> */}
              {/* <div class="input-group mb-3">
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
                </span> 
              </div> */}
              {/* <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
              >
                Sign up
              </button> */}
              <div className="inputGroup inputGroup1">
                <label for="loginEmail" id="loginEmailLabel">Email</label>
                <input type="email" id="loginEmail" maxlength="254" />
                <p className="helper helper1">email@domain.com</p>
              </div>
              <div className="inputGroup inputGroup2">
                <label for="loginPassword" id="loginPasswordLabel">Password</label>
                <input type="password" id="loginPassword" />
                <label id="showPasswordToggle" for="showPasswordCheck">Show
                  <input id="showPasswordCheck" type="checkbox" />
                  <div className="indicator"></div>
                </label>
              </div>
              <div className="inputGroup inputGroup3">
                <button id="login">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;