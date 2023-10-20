import "../../styles/HomepageStyles/body.css";
import img1 from "../../images/HomepageImages/img3.jpg";
import { Link } from "react-router-dom";
export default function Body() {
  return (
    <>
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
                Your story, Your Stars : Personalized Horoscopes Just for You
              </span>
            </div>
          </div>
          <div>
            {/* <Link to="/Cards" className="linkHome"> */}{" "}
            <button className="button1">SIGN UP</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
