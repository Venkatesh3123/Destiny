import "../../src/styles/signup1.css";
import destiny from "../images/destiny.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import data from "../Data/phonecode.json";
import { useState } from "react";
export default function Signup1() {
  const [selectedCode, setSelectedCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({});
  const [isValidCode, setIsValidCode] = useState(true);
  const navigate = useNavigate();

  const handleCode = (event) => {
    const value = event.target.value;
    setSelectedCode(value);
    setIsValidCode(true);
  };
  const mobileChange = (event) => {
    setMobile(event.target.value);
    const handleMobile = () => {
      if (mobile === "") {
        return "Please Enter Your Mobile number";
      } else if (mobile.length < 9) {
        return "Mobile number should contain 10 digits";
      } else if (mobile.match(namePattern)) {
        return "Please Enter Numbers only";
      } else {
      }
    };

    const error1 = handleMobile();
    setError((prev) => ({
      ...prev,
      mobile: error1,
    }));
  };
  var code = false;
  var mbl = false;
  const namePattern = /[A-Za-z]/;
  const mobilePattern = /[0-9]/;

  const otp = (e) => {
    e.preventDefault();
    const handleMobile = () => {
      if (mobile === "") {
        return "Please Enter Your Mobile number";
      } else if (mobile.length < 10) {
        return "Mobile number should contain 10 digits";
      } else if (!mobile.match(mobilePattern)) {
        return "Please Enter Numbers only";
      } else {
        return (mbl = true);
      }
    };

    const error1 = handleMobile();
    setError((prev) => ({
      ...prev,
      mobile: error1,
    }));
    if (selectedCode) {
      setIsValidCode(true);
      code = true;
    } else {
      setIsValidCode(false);
    }
    if (code & mbl) {
      navigate("/userSignup/OTP&verification");
    }
  };

  return (
    <div className="mainContainerSignup">
      <div className="mainContainer-sub">
        <div className="sub-logoDiv">
          <img src={destiny} className="descrption"></img>
        </div>
        <h2 className="logoHead1">Welcome To World Of Destiny</h2>
        <div>
          <p className="logosubHead">
            Destiny is an antiquated convention which says that the character
            and predetermination of human rely upon the situation of the stars
            right now of birth.
          </p>
        </div>

        <div className="phoneLabel">Enter your Mobile</div>
        <div className="phoneDiv">
          <FontAwesomeIcon icon={faPhone} size="xl" className="user" />
          <select
            className="codeSelect"
            value={selectedCode}
            onChange={handleCode}
          >
            <option value="" style={{ height: "20px" }}>
              Select country code
            </option>
            {data.map((ele) => {
              return (
                <option key={ele.dial_code}>
                  <p className="phoneCode"></p>
                  {ele.code}
                  {ele.dial_code}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            className="phoneInput"
            placeholder="Enter your mobile number"
            onChange={mobileChange}
            // onClick={mobileClick}
          ></input>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          {" "}
          <div>
            {" "}
            {!isValidCode ? (
              <p className="signuperror">Please Select the Mobile code</p>
            ) : (
              ""
            )}
          </div>
          <div style={{ position: "fixed" }}>
            {error ? <p className="error1">{error.mobile}</p> : <p></p>}
          </div>{" "}
        </div>

        <button className="phoneOtp" onClick={otp}>
          Send OTP
        </button>
      </div>
    </div>
  );
}
