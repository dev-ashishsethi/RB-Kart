import "../Nav/nav.css";
import "./signUp.css";
import { IcBaselineRemoveRedEye } from "../../assets/icons/icons.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Authentication";
import { useReducer } from "react";

export function SignUp() {
  const [passwordType, setPasswordType] = useState("password");
  const [state, dispatch] = useReducer(details, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { login, setLogin } = useAuth();

  function details(state, action) {
    switch (action.type) {
      case "FirstName":
        return { ...state, firstName: action.firstName };
      case "LastName":
        return { ...state, lastName: action.lastName };
      case "Email":
        return { ...state, email: action.email };
      case "Password":
        return { ...state, password: action.password };
      case "ConfirmPassword":
        return { ...state, confirmPassword: action.confirmPassword };
    }
  }
  const showPassword = () =>
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/signup", state);
      console.log("response", response);
      if (response.status >= 200 && response.status < 299) {
        const verificationToken = response.data.encodedToken;
        localStorage.setItem("login", verificationToken);
        const userData = response.data.createdUser;
        const userId = response.data.createdUser._id;
        localStorage.setItem("userId", userId);
        console.log("userdata", userData);
        setLogin(true);
      }
    } catch (error) {
      console.error("sign up error", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-subcontainer">
        <h3 className="form-title">SignUp</h3>
        <form action="" className="signUp-form">
          <label htmlFor="finput" className="form-label" id="fname-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            className="sign-input-box"
            id="finput"
            onChange={(e) =>
              dispatch({ type: "FirstName", firstName: e.target.value })
            }
          />

          <label htmlFor="linput" className="form-label" id="lname-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="sign-input-box"
            id="linput"
            onChange={(e) =>
              dispatch({ type: "LastName", lastName: e.target.value })
            }
          />

          <label htmlFor="email-input" className="form-label" id="email-label">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            className="sign-input-box"
            id="email-input"
            onChange={(e) => dispatch({ type: "Email", email: e.target.value })}
          />
          <label htmlFor="pass-input" className="form-label" id="pass-label">
            Password
          </label>
          <section className="password-section">
            <input
              type={passwordType}
              placeholder="Enter Password"
              className="sign-input-box"
              id="pass-input"
              onChange={(e) =>
                dispatch({ type: "Password", password: e.target.value })
              }
            />
            <IcBaselineRemoveRedEye
              className="eye-icon"
              onClick={showPassword}
            />
          </section>

          <label
            htmlFor="confpass-input"
            className="form-label"
            id="confpass-label"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="sign-input-box"
            id="confpass-input"
            onChange={(e) =>
              dispatch({
                type: "ConfirmPassword",
                confirmPassword: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="btn btn-primary form-btn"
            id="form-btn3"
            onClick={submitHandler}
          >
            Register
          </button>

          <Link
            to="/signIn"
            id="form-btn4"
            className="btn btn-secondary form-btn"
          >
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
}
