import Carousel from "react-bootstrap/Carousel";
import "../../styles/HomepageStyles/coursel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../images/HomepageImages/time1.jpg";
import img2 from "../../images/HomepageImages/new.jpg";
import img3 from "../../images/HomepageImages/personal.jpg";
export default function Coursel() {
  return (
    <>
      <div className="mainDiv">
        <div className="firstDiv"></div>
        <div className="mainCOursel">
          <Carousel>
            <Carousel.Item interval={800}>
              <img src={img1} className="img"></img>
              <Carousel.Caption>
                <div>
                  {" "}
                  <h3 className="couHead1">
                    Travel Through Time, Time Machines at Your Service
                  </h3>
                  <p className="couPara1">
                    Experience the transformation services of our astrology
                    site,where the past ,present and future converge to shape
                    your destiny
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img src={img2} className="img"></img>
              <Carousel.Caption>
                <div>
                  {" "}
                  <h3 className="couHead2">Future In Our Hands</h3>
                  <p className="couPara2">
                    There is no better boat than a horoscope to help a man cross
                    over the sea of a life
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img src={img3} className="img"></img>
              <Carousel.Caption>
                <div>
                  {" "}
                  <h3 className="couHead3" style={{ color: "white" }}>
                    Chance To Know Your Future In This Book
                  </h3>
                  <p className="couPara3">
                    Astrology like a gravity.You don't have to believe in it for
                    it to be working in your life
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="firstDiv"></div>
      </div>

      <div className="lowerDiv">
        <p className="pDiv">
          {" "}
          <span className="span1">UNLOCK YOUR COSMIC JOURNEY</span>
        </p>
        <br></br>
        <p>
          Explore Your <span className="span2">WEEKLY , DAILY , MONTHLY</span>{" "}
          and <span className="span2">YEARLY</span>
        </p>
        <br></br>
        <p>Horoscopes with Our Time Travelling</p>
      </div>
    </>
  );
}
