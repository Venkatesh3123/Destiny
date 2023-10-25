import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/intro";

import Logo from "./components/logo";
import Otp from "./components/Otp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Homepage from "./components/Homepage/Nav";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route
          path="/Homepage/Cards"
          element={
            <>
              <Homepage />
              <Cards />
            </>
          }
        ></Route>

        <Route path="/Cards" element={<Cards />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signup/OTP&verification" element={<Otp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
