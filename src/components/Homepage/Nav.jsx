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
import img1 from "../../images/HomepageImages/img3.jpg";
export default function Homepage() {
  const [allEle, setAllEle] = useState(true);
  // const[SignUp,setSignUp]=useState(false)
  const navigate = useNavigate();
  const signUp = (e) => {
    navigate("/Homepage/Cards");
    setAllEle(false);
  };

  const signup1 = () => {
    navigate("/Homepage/Cards");
    setAllEle(false);
  };
  const Home = () => {
    setAllEle(true);
    navigate("/Homepage");
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
              <li>Login</li>
            </ul>
          </div>
        </div>
      </nav>

      {allEle ? (
        <>
          {" "}
          <Coursel />
          {/* <Body /> */}
          <div className="subFooter1">
            <div className="footSub">
              <div className="subChild1 ">
                <div>
                  <img src={img1} className="image1"></img>
                </div>
                <div className="textAlign">
                  <span className="spanFont1">Personalized Horoscopes</span>
                  <br></br>
                  <span className="spanFont2">
                    Your story, Your Stars : Personalized Horoscopes Just for
                    You
                  </span>
                </div>
              </div>
              <div>
                <button className="button1" onClick={signup1}>
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Cards />
      )}
    </>
  );
}
