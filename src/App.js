import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/intro";
import Login from "./components/login";
import Logo from "./components/logo";
import Otp from "./components/Otp";
import Homepage from "./components/Homepage/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Login/OTP&verification" element={<Otp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
