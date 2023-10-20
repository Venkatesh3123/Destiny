import "../../styles/HomepageStyles/Nav.css";
import destiny from "../../images/destiny.png";
import Coursel from "./Coursel";
import Body from "./body";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Homepage() {
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
              <Link to="/Cards" className="linkHome">
                {" "}
                <li>Sign Up</li>
              </Link>
              <li>Login</li>
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
