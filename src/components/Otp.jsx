import "../styles/signup.css";
import "../styles/Otp.css";
import destiny from "../images/destiny.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Otp() {
  const navigate = useNavigate();
  const numberOfInputs = 4;
  const [otp, setOtp] = useState(Array(numberOfInputs).fill(""));
  const [popup, setPopup] = useState(false);
  const [prev, setPrev] = useState(true);
  const [error, setError] = useState({});
  const userOtp = otp.toString();
  const userOtp1 = userOtp.replace(/\,/g, "");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const updatedOtp = [...otp];

    if (value.length === 1) {
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (index < numberOfInputs - 1) {
        // Move focus to the next input field
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (value.length === 0) {
      // Move focus to the previous input field
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const back = () => {
    if (prev) {
      navigate("/userSignup");
    } else {
      setPrev(false);
    }
  };
  var otpp = false;
  const popUp = (e) => {
    e.preventDefault();
    const handleOtp = () => {
      if (userOtp1 == "") {
        return "Please Enter your Otp";
      } else if (userOtp1.length != 4) {
        return "please Enter your Otp Properly";
      } else {
        return (otpp = true);
      }
    };
    const error = handleOtp();
    setError((prev) => ({
      ...prev,
      otp1: error,
    }));
    if (otpp) {
      setPopup(true);
      setPrev(false);
    }
  };
  const cancel = () => {
    navigate("/UserInfo");
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
                  style={{ color: "red" }}
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

              <div className="otpInput">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    className="otpBox"
                    type="text"
                    onChange={(e) => handleInputChange(e, index)}
                    maxLength="1"
                  ></input>
                ))}
              </div>

              <button
                className="otp123"
                style={{ cursor: "not-allowed" }}
                onClick={popUp}
              >
                Verify & Procced
              </button>
            </div>
          </div>
          <div className="pop">
            <h2 className="popHead">Disclamier</h2>
            <p className="popp">
              <p className="popprimaryText"> Dear user</p>
              We take your privacy seriously and want to be transparent about
              the data we collect and how we use it. By using our app, you
              consent to the collection and use of your personal information as
              described in this disclaimer message. We collect and store certain
              types of information when you use our app, including your device's
              unique identifier, your location, and other usage data. This
              information is used to improve the app's functionality and
              personalize your experience. We do not share your personal
              information with third parties unless required by law or to
              provide you with requested services. We also take reasonable
              measures to protect your personal information from unauthorized
              access or use You have the right to control your personal
              information and can opt-out of certain data collection practices
              by adjusting your app settings. You can also delete your account
              and associated data at any time. By continuing to use our app, you
              agree to the terms of this disclaimer message and our privacy
              policy. If you have any questions or concerns, please contact us
              at contact information.
              <p className="popprimaryText"> Thank you for using our app</p>
              <p className="popprimaryText"> sincerely</p>
              <p className="popprimaryText"> Destiny</p>
            </p>

            <button className="otp2" onClick={cancel}>
              Agree
            </button>
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
                style={{ color: "red" }}
                className="icon"
              />
            </div>
            <h2 className="otpHead">OTP Verification</h2>

            <div>
              <p className="otpSubHead">
                verify your account and secure your information.we need to
                confirm your mobile number.
              </p>
            </div>
            <div className="otpInput">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  className="otpBox"
                  type="text"
                  onChange={(e) => handleInputChange(e, index)}
                  maxLength="1"
                ></input>
              ))}
            </div>
            {error ? <p className="error">{error.otp1}</p> : ""}
            <button className="otp1" onClick={popUp}>
              Verify & Procced
            </button>
          </div>
        </div>
      )}
    </>
  );
}
