import "../../styles/HomepageStyles/Nav.css";
import destiny from "../../images/HomepageImages/mainlogo.jpg";
import Coursel from "./Coursel";
import Body from "./body";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Signup from "../signup";
import "../../styles/HomepageStyles/body.css";
import { useState, useEffect } from "react";
import Cards from "../intro";
import Footer1 from "./Footer1";

export default function Homepage() {
  const [allEle, setAllEle] = useState(true);

  // const[SignUp,setSignUp]=useState(false)
  const navigate = useNavigate();
  const signUp = (e) => {
    navigate("/userSignup");
    setAllEle(false);
  };

  const Home = () => {
    setAllEle(true);
    navigate("/Homepage");
  };
  const login = () => {
    navigate("/Login");
  };
  return (
    <>
      <nav className="nav">
        <div className="navDiv">
          <div className="logoDiv">
            <div className="ImgDiv">
              {" "}
              <img src={destiny} className="logoImg" toolTip="destiny"></img>
              {/* <p className="Img-p">Destiny</p> */}
            </div>
          </div>
          <div className="ulDiv">
            <ul className="ulContainer">
              <li onClick={Home}>Home</li>

              <li onClick={signUp}>Sign Up</li>

              <li onClick={login}>Login</li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <div className="mainNav">
        <div className="bubbles">
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "34" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "52" }}></span>
          <span style={{ "--i": "70" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "96" }}></span>
          <span style={{ "--i": "63" }}></span>
          <span style={{ "--i": "73" }}></span>
          <span style={{ "--i": "92" }}></span>
          <span style={{ "--i": "36" }}></span>
          <span style={{ "--i": "31" }}></span>
          <span style={{ "--i": "92" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "55" }}></span>
          <span style={{ "--i": "75" }}></span>
          <span style={{ "--i": "96" }}></span>
          <span style={{ "--i": "54" }}></span>
          <span style={{ "--i": "49" }}></span>
          <span style={{ "--i": "29" }}></span>
          <span style={{ "--i": "79" }}></span>
          <span style={{ "--i": "84" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "75" }}></span>
          <span style={{ "--i": "34" }}></span>
          <span style={{ "--i": "71" }}></span>
          <span style={{ "--i": "76" }}></span>
          <span style={{ "--i": "54" }}></span>
          <span style={{ "--i": "65" }}></span>
          <span style={{ "--i": "44" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "77" }}></span>
          <span style={{ "--i": "57" }}></span>
          <span style={{ "--i": "63" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "24" }}></span>

          <span style={{ "--i": "78" }}></span>
          <span style={{ "--i": "58" }}></span>
          <span style={{ "--i": "61" }}></span>
          <span style={{ "--i": "99" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "43" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "34" }}></span>

          <span style={{ "--i": "91" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "7" }}></span>
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "98" }}></span>
        </div>
      </div>
      <div className="elementsDiv">
        <Coursel />

        <Body />
        <Footer1 />
      </div>
    </>
  );
}
