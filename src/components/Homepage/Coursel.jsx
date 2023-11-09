import Carousel from "react-bootstrap/Carousel";
import "../../styles/HomepageStyles/coursel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import img1 from "../../images/HomepageImages/curoselrobo.png";
import img2 from "../../images/HomepageImages/coursel2.jpg";
import img3 from "../../images/HomepageImages/coursel-3.jpg";
export default function Coursel() {
  const [text, setText] = useState("");

  const sentence = "Revolutionary Technology To Innovate Your Tomorrow";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sentence.length) {
        setText(sentence.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="title1">
        <p className="title1-p1">FUTURE FOCUSED TIME MACHINE</p>
        <p className="title1-p2">FUTURE FOCUSED TIME MACHINE</p>
      </div>
      <div className="mainDiv ">
        <div className="mainDiv1">
          <h2 className="main1-h2">{text}</h2>
          <br></br>
          <p className="main1-p">
            Experience the transformation service of our destiny site,where the
            past ,present and future converge toshape your destiny
          </p>
          <div className="wrap">
            <button className="button">About us</button>
          </div>
        </div>
        <div className="mainDiv2">
          <img src={img1} className="img"></img>
        </div>
      </div>
      <div className="lowerDiv">
        <p>
          {" "}
          <span className="span1">UNLOCK YOUR COSMIC JOURNEY</span>
        </p>
        <br></br>
        <p className="pLower">
          Explore Your <span className="span2">WEEKLY , DAILY , MONTHLY</span>{" "}
          and <span className="span2">YEARLY</span>
        </p>
        <br></br>
        <p className="pLower">Future with Our Time Travelling</p>
      </div>
    </>
  );
}
