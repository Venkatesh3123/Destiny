import React, { useState } from "react";
import "../styles/userLogin.css";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [submit1, setSubmit1] = useState(false);
  // const navigate = useNavigate();
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = () => {
    if (email === "") {
      return "Please Enter Your email";
    } else {
      setSubmit(false);
    }
  };
  const handlepassword = () => {
    if (password === "") {
      return "Please Enter Your Password";
    } else {
      setSubmit(false);
    }
  };
  const emailClick = () => {
    const error1 = handleEmail();
    setError((prev) => ({
      ...prev,
      email: error1,
    }));
  };
  const passwordClick = () => {
    const error1 = handlepassword();
    setError((prev) => ({
      ...prev,
      password: error1,
    }));
  };
  var namePattern = /^(?=.{3,254}$)\w+[\.\w+]+@\w+\.\w{2,3}$/;
  var mail = false;
  var pass = false;
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmit(true);
    setSubmit1(true);
    const handleEmail = () => {
      if (email === "") {
        return "Please Enter Your Name";
      } else {
        return (mail = true);
      }
    };
    const error1 = handleEmail();
    setError((prev) => ({
      ...prev,
      email: error1,
    }));
    const handlepassword = () => {
      if (password === "") {
        return "Please Enter Your Password";
      } else {
        return (pass = true);
      }
    };
    const error2 = handlepassword();
    setError((prev) => ({
      ...prev,
      password: error2,
    }));
  };
  const Register = () => {
    // navigate("/Signup");
  };
  return (
    <div className="center">
      <form className="form1">
        <div className="title">Login</div>
        <div className="inputs">
          <div className="inputf">
            <div className="label5">Email</div>
          </div>
          <input
            type="textbox"
            className="nameInput"
            placeholder="Email"
            onChange={emailChange}
            onClick={emailClick}
          ></input>
          {submit & (mail == false) ? (
            <p className="error1">{error.email}</p>
          ) : (
            <p></p>
          )}
          {(email === "") & (submit == false) ? (
            <p className="error1">{error.email}</p>
          ) : (
            <p></p>
          )}
          <div className="inputf">
            <div className="label51">Password</div>
            <input
              type="textbox"
              className="nameInput"
              placeholder="Password"
              onChange={passwordChange}
              onClick={passwordClick}
            ></input>
            {submit1 & (password == false) ? (
              <p className="error1">{error.password}</p>
            ) : (
              <p></p>
            )}
            {(password === "") & (submit1 == false) ? (
              <p className="error1">{error.password}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="links">
          <a href="https://dev-support.wannapractice.com/">Forgot Password</a>
          <label htmlFor="remember" className="rem">
            <input type="checkbox" id="remember" />
            Remember Me
          </label>
        </div>
        <button type="button" className="bt" onClick={handleLogin}>
          {" "}
          Login
        </button>
        <div className="text">
          New user? Create an account{" "}
          <p onClick={Register} className="Register">
            Register
          </p>
        </div>
      </form>
    </div>
  );
}
