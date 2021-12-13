import { useState } from "react";
import "./Login.css";
import Nav from "./Nav";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setactive] = useState("login");

  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginhandle = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const SignInwithFirebase = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          console.log(result.user.displayName);

          navigate("/home");
        }
        console.log(name);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div
        className="main-cont"
        style={{ height: "100vh", backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="content">
          <div className="box">
            <div className="button">
              <button
                type="button"
                disabled={active == "login" ? true : false}
                onClick={() => setactive("login")}
                className="btn-1"
              >
                Login
              </button>
              <button
                type="button"
                disabled={active !== "login" ? true : false}
                className="btn-1"
                onClick={() => setactive("register")}
              >
                Register
              </button>
            </div>
            {active == "login" && (
              <>
                <div className="login-alternative">
                  <a href="" onClick={SignInwithFirebase}>
                    <i className="fab fa-google"></i>
                  </a>

                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                </div>

                <div className="login-input" id="login-input-1">
                  <input
                    type="email"
                    id="user"
                    className="user"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    id="pass"
                    className="pass"
                    placeholder="Password Required"
                    required
                  />
                  <button className="btn-3" onClick={loginhandle}>
                    LOGIN
                  </button>
                </div>
              </>
            )}
            {active == "register" && (
              <div class="login-input" id="register-input-1">
                <input
                  type="email"
                  id="email"
                  className="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email Required"
                  required
                />
                <input
                  type="password"
                  id="pass"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="pass"
                  placeholder="Password Required"
                  required
                />
                <button className="btn-3" onClick={register}>
                  REGISTER
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
