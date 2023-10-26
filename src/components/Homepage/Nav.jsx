import "../../styles/HomepageStyles/Nav.css";
import destiny from "../../images/destiny.png";
import Coursel from "./Coursel";
import Body from "./body";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../signup";
import "../../styles/HomepageStyles/body.css";
import { useState, useEffect } from "react";
import Cards from "../intro";

export default function Homepage() {
  const [allEle, setAllEle] = useState(true);
  // const[SignUp,setSignUp]=useState(false)
  const navigate = useNavigate();
  const signUp = (e) => {
    navigate("/Signup");
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
              <img src={destiny} className="logoImg"></img>
              <p className="Img-p">Destiny</p>
            </div>
          </div>
          <div className="ulDiv">
            <ul className="ulContainer">
              <li onClick={Home}>Home</li>
              {/* <Link to="/Homepage/Cards" className="linkHome"> */}{" "}
              <li onClick={signUp}>Sign Up</li>
              {/* </Link> */}
              <li onClick={login}>Login</li>
            </ul>
          </div>
        </div>
      </nav>
      <Coursel />
      <Body />
      <Footer />
    </>
  );
}
