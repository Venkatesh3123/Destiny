import "../styles/login.css";
import "../styles/Otp.css";
import destiny from "../images/destiny.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Otp() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [prev, setPrev] = useState(true);
  const back = () => {
    if (prev) {
      navigate("/Login");
    } else {
      setPrev(false);
    }
  };
  const popUp = () => {
    setPopup(true);
    setPrev(false);
  };
  const cancel = () => {
    setPopup(false);
    setPrev(true);
  };
  return (
    <>
      {popup ? (
        <>
          <div className="mainContainerOtp">
            <div className="main3">
              <div className="imgDiv1">
                <img src={destiny} className="des"></img>
              </div>
              <div className="chavron1 " onClick={back}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "black" }}
                  className="icon"
                />
              </div>
              <h2 className="head">OTP Verification</h2>

              <div>
                <p className="subHead">
                  verify your account and secure your information.we need to
                  confirm your mobile number.
                </p>
              </div>

              <input
                type="textbox"
                className="otpBox"
                placeholder="Enter Your OTP Here"
              ></input>
              <button className="otp1" onClick={popUp}>
                Verify & Procced
              </button>
            </div>
          </div>
          <div className="pop">
            <h2 className="popHead">PRIVACY & POLICY</h2>
            <p className="popp">
              To provide you with a better experience, we may request certain
              personal data, such as your name, email address, location, or
              preferences. This information allows us to tailor our services to
              your specific needs and preferences. Rest assured that we take
              your privacy and data security seriously, and we are committed to
              protecting your personal information in accordance with applicable
              data protection laws. Your data will only be used for the purpose
              for which it was collected and will never be shared with third
              parties without your consent. We encourage you to review our
              privacy policy to understand how we handle and safeguard your
              personal information. Your trust is important to us, and we are
              dedicated to ensuring a safe and personalized experience while
              respecting your privacy.
            </p>
            <div className="popDiv">
              <button className="otp1">Ok</button>
              <button className="otp1" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mainContainerOtp">
          <div className="mainOtp">
            <div className="imgDiv1">
              <img src={destiny} className="des"></img>
            </div>
            <div className="chavron " onClick={back}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2xl"
                style={{ color: "black" }}
                className="icon"
              />
            </div>
            <h2 className="head">OTP Verification</h2>

            <div>
              <p className="subHead">
                verify your account and secure your information.we need to
                confirm your mobile number.
              </p>
            </div>

            <input
              type="textbox"
              className="otpBox"
              placeholder="Enter Your OTP Here"
            ></input>
            <button className="otp1" onClick={popUp}>
              Verify & Procced
            </button>
          </div>
        </div>
      )}
    </>
  );
}
