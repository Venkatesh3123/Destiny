import "../../styles/HomepageStyles/body.css";
import img1 from "../../images/HomepageImages/tumblr_c34806a291c408488ffedf57a63bd9ad_ec4f4af3_540.gif";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Homepage from "./Nav";
import { useState } from "react";
import Cards from "../intro";
import { useNavigate } from "react-router-dom";
export default function Body() {
  // const [body, setBody] = useState(true);
  // const signUp = () => {
  //   setBody(false);
  // };igate
  // const navigate = useNavigate();
  // const signUp = () => {
  //   navigate("/Homepage/Cards");
  // };
  return (
    <>
      <div className="subFooter1">
        <div className="footSub">
          <div className="subChild1 ">
            <div>
              <img src={img1} className="image1"></img>
            </div>
            <div className="textAlign">
              <span className="spanFont1">
                Time travel is the best way to figure out where your heart truly
                belongs.
              </span>
              <br></br>
              <span className="spanFont2"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
