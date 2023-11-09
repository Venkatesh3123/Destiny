import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./components/signup";
import Otp from "./components/Otp";
import Cards from "./components/intro";
import Userinfo from "./components/userInfo";
import Nav from "./components/Homepage/Nav";
import Coursel from "./components/Homepage/Coursel";
import Body from "./components/Homepage/body";
import Footer from "./components/Homepage/Footer";
import LoginForm from "./components/Login";
import Footer1 from "./components/Homepage/Footer1";
import Signup1 from "./components/Signup1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Signup /> */}
    {/* <LoginForm /> */}
    {/* <LoginForm /> */}
    {/* <Otp /> */}
    {/* <Cards /> */}
    {/* <Footer1 /> */}
    {/* <Userinfo /> */}
    {/* <Homepage /> */}
    {/* <Nav /> */}
    {/* <Signup1 /> */}

    {/* <Coursel /> */}
    {/* <Body /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
