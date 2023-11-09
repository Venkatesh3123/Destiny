import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/intro";

import Logo from "./components/logo";
import Otp from "./components/Otp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Homepage from "./components/Homepage/Nav";
import LoginForm from "./components/Login";
import Signup1 from "./components/Signup1";
import Userinfo from "./components/userInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/userSignup" element={<Signup1 />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
        {/* <Route path="/Signup" element={<Signup />}></Route> */}
        <Route path="/Login" element={<LoginForm />}></Route>

        <Route path="/userSignup/OTP&verification" element={<Otp />}></Route>
        <Route path="/UserInfo" element={<Userinfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
