import "./signIn.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication";
import axios from "axios";
import { useState } from "react";

export function SignIn() {
  const { login, setLogin } = useAuth();
  const [testLogin, setTestLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: testLogin === false ? "adarshbalika@gmail.com" : "",
    password: testLogin === false ? "adarshbalika" : "",
  });

  const testLoginHandler = () => {
    if (testLogin) {
      setTestLogin((test) => (test = false));
      console.log("login email and password", loginData);
    } else {
      setTestLogin((test) => (test = true));
      console.log("login email and password", loginData);
    }
  };

  const onChangeHandler = (e) => {
    return setLoginData((loginData) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", loginData);
    console.log(response);
    if (response.status === 200) {
      const verificationToken = response.data.encodedToken;
      localStorage.setItem("login", verificationToken);
      const userObj = response.data.foundUser;
      const userId = response.data.foundUser._id;
      localStorage.setItem("UserId", userId);
      setLogin(true);
    }
  };

  return (
    <div>
      {login ? (
        <h1 className="form-title">You are now logged in</h1>
      ) : (
        <h1 className="form-title">Please Log In</h1>
      )}
      <div className="form-container">
        <div className="form-subcontainer">
          <h3 className="form-title">Sign-In</h3>

          <form action="" className="signIn-form" onSubmit={signInHandler}>
            <label
              htmlFor="email-input"
              className="form-label"
              id="email-label"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="sign-input-box"
              id="email-input"
              name="email"
              onChange={onChangeHandler}
            />

            <label htmlFor="pass-input" className="form-label" id="pass-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="sign-input-box"
              id="pass-input"
              name="password"
              onChange={onChangeHandler}
            />

            <button
              type="submit"
              className="btn btn-primary form-btn"
              id="form-btn1"
            >
              Sign In
            </button>

            <Link
              to="/signUp"
              id="form-btn2"
              className="btn btn-secondary form-btn"
            >
              Sign Up
            </Link>

            <button
              type="submit"
              className="btn btn-primary form-btn"
              id="test-login"
              onClick={testLoginHandler}
            >
              Test Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
