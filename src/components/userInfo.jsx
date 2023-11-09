import { useState } from "react";
import "../styles/userInfo.css";
import "../../src/styles/HomepageStyles/Nav.css";
import "../../src/styles/HomepageStyles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Homepage/Footer";
import {
  faUser,
  faLocationDot,
  faCalendarDays,
  faClock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import destiny from "../../src/images/HomepageImages/mainlogo.jpg";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import male from "../../src/images/male.jpg";
import female from "../../src/images/female.jpg";
import others from "../../src/images/others.jpg";
import Footer1 from "./Homepage/Footer1";
import { useNavigate } from "react-router-dom";
export default function Userinfo() {
  const [percentage, setPercentage] = useState(0);
  const [user1, setUser1] = useState(true);
  const [birth, setBirth] = useState(false);
  const [dob, setDob] = useState(false);
  const [time, setTime] = useState(false);
  const [gender, setGender] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState({});
  const [errorTime, setErrorTime] = useState("");
  const [submit2, setSubmit2] = useState(false);
  // const [nme, setNme] = useState(false);
  const namePattern = /[A-Za-z]/;
  var nme = false;
  let lct = false;
  let dte = false;
  let tmy = false;
  let gnd = false;

  const nameChange = (event) => {
    setName(event.target.value);
    const handleName = () => {
      if (name === "") {
        return "Please Enter Your Name";
      } else if (!name.match(namePattern)) {
        return "Please Enter Alphabets only";
      } else if (name.length < 4) {
        return "Name should be greater than 3 letters";
      } else {
        return <></>;
      }
    };

    const error1 = handleName();
    setError((prev) => ({
      ...prev,
      name: error1,
    }));
  };

  const locationChange = (event) => {
    setLocation(event.target.value);
    const handleLocation = () => {
      if (location === "") {
        return "Please Enter Your Location";
      } else if (!location.match(namePattern)) {
        return "Please Enter Alphabets only";
      } else if (location.length < 4) {
        return "Location should be greater than 3 letters";
      } else {
        return <></>;
      }
    };

    const error1 = handleLocation();
    setError((prev) => ({
      ...prev,
      location: error1,
    }));
  };

  const [selectedGender, setSelectedGender] = useState(null);
  const per = percentage.toString();
  const res = per.slice(0, 3);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const today = new Date();
  const currentDate = String(today.getDate());
  const currentMonth = String(today.getMonth() + 1);
  const currentYear = String(today.getFullYear());

  const maxDate = `${currentDate}-${currentMonth}-${currentYear}`;

  const handleNextClick = (e) => {
    e.preventDefault();
    const handleName = () => {
      if (name === "") {
        return "Please Enter Your Name";
      } else if (!name.match(namePattern)) {
        return "Please Enter Alphabets only";
      } else if (name.length < 4) {
        return "Name should be greater than 3 letters";
      } else {
        nme = true;
      }
    };

    const error1 = handleName();
    setError((prev) => ({
      ...prev,
      name: error1,
    }));
    if (nme) {
      if (percentage < 100) {
        setPercentage(percentage + 20);
        console.log(nme);
      }

      setBirth(true);
      setUser1(false);
    }
  };
  const handleNextClick1 = (e) => {
    e.preventDefault();
    const handleLocation = () => {
      if (location === "") {
        return "Please Enter Your Location";
      } else if (!location.match(namePattern)) {
        return "Please Enter Alphabets only";
      } else if (location.length < 4) {
        return "Location should be greater than 3 letters";
      } else {
        return (lct = true);
      }
    };

    const error1 = handleLocation();
    setError((prev) => ({
      ...prev,
      location: error1,
    }));
    if (lct) {
      if (percentage < 100) {
        setPercentage(percentage + 20);
      }
      setBirth(false);
      setUser1(false);
      setDob(true);
    }
  };

  const dateChange = (date) => {
    if (date && date instanceof Date && !isNaN(date)) {
      const today = new Date();
      const minDate = new Date("1947-01-01");

      const maxDate = new Date("2030-12-31");

      if (date >= minDate && date <= today) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
    setSelectedDate(date);
  };

  const handleNextClick2 = (e) => {
    e.preventDefault();
    if (selectedDate && selectedDate instanceof Date && !isNaN(selectedDate)) {
      const today = new Date();
      const minDate = new Date("1947-01-01");

      const maxDate = new Date("2030-12-31");

      if (selectedDate >= minDate && selectedDate <= today) {
        setIsValid(true);
        setSubmit2(false);
        dte = true;
      }
    } else {
      setIsValid(false);
    }
    if (dte) {
      if (percentage < 100) {
        setPercentage(percentage + 20);
      }
      setBirth(false);
      setUser1(false);
      setDob(false);
      setTime(true);
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    validateTime(time);
  };

  const validateTime = (time) => {
    if (time) {
      if (String(!time).match("h:mm aa")) {
        setErrorTime("Selected time should be in the future.");
        return false;
      }
    } else {
      setErrorTime("Please select a valid time.");
      return false;
    }

    setErrorTime("");
    return (tmy = true);
  };

  const handleNextClick3 = (e) => {
    e.preventDefault();
    if (validateTime(selectedTime)) {
    } else {
      return (tmy = true);
    }
    if (tmy) {
      if (percentage < 100) {
        setPercentage(percentage + 20);
      }
      setBirth(false);
      setUser1(false);
      setDob(false);
      setTime(false);
      setGender(true);
    }
  };
  const handleNextClick4 = (e) => {
    e.preventDefault();
    const handleGender = () => {
      if (selectedGender === null) {
        return "Please Select your Gender";
      } else {
        return (gnd = true);
      }
    };

    const error1 = handleGender();
    setError((prev) => ({
      ...prev,
      gender: error1,
    }));
    if (gnd) {
      if (percentage < 100) {
        setPercentage(percentage + 20);
      }
      setBirth(false);
      setUser1(false);
      setDob(false);
      setTime(false);
      setGender(true);
    }
  };
  const iconClick1 = () => {
    if (percentage < 100) {
      setPercentage(percentage - 20);
    }

    setBirth(false);
    setUser1(true);
    setDob(false);
    setTime(false);
    setGender(false);
  };
  const iconClick2 = () => {
    if (percentage < 100) {
      setPercentage(percentage - 20);
    }
    setBirth(true);
    setUser1(false);
    setDob(false);
    setTime(false);
    setGender(false);
  };
  const iconClick3 = () => {
    if (percentage < 100) {
      setPercentage(percentage - 20);
    }
    setBirth(false);
    setUser1(false);
    setDob(true);
    setTime(false);
    setGender(false);
  };
  const iconClick4 = () => {
    if (percentage <= 100) {
      setPercentage(percentage - 20);
    }
    setBirth(false);
    setUser1(false);
    setDob(false);
    setTime(true);
    setGender(false);
    setSelectedGender(null);
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };
  const navigate = useNavigate();
  const Home = () => {
    navigate("/Homepage");
  };

  const progressBarStyle = {
    background: `conic-gradient(
      red ${percentage}%,
      #ecf0f1 ${percentage}%
    )`,
  };
  return (
    <>
      <div className="mainContainer-user">
        <nav className="nav" style={{ backgroundColor: "black" }}>
          <div className="navDiv" style={{ backgroundColor: "black" }}>
            <div className="logoDiv">
              <div className="ImgDiv">
                {" "}
                <img src={destiny} className="logoImg" toolTip="destiny"></img>
                {/* <p className="Img-p">Destiny</p> */}
              </div>
            </div>
            <div className="ulDiv">
              <ul className="ulContainer">
                <li onClick={Home}>Home</li>

                <li
                //  onClick={login}
                >
                  About us
                </li>
              </ul>
            </div>
          </div>
        </nav>{" "}
        <div className="each-card">
          <div className="circular-progress-container">
            <div className="circular-progress-bar" style={progressBarStyle}>
              <div className="circular-progress-text1"></div>

              <div className="circular-progress-text">{res}%</div>
            </div>
          </div>

          {user1 ? (
            <>
              <div className="iconContainer1">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "red" }}
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">What is your Name?</h2>
                <p className="name1">
                  To help personalize your experience ,we would like to know a
                  little more about you.
                </p>
                <h3 className="inputHead">Enter Your Name</h3>
                <div className="nameDiv">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="xl"
                    className="user"
                    style={{ color: "red" }}
                  />
                  <input
                    type="textbox"
                    className="nameInput"
                    placeholder="Enter Your Name"
                    onChange={nameChange}
                    value={name}
                  ></input>
                </div>
                {error ? <p className="error">{error.name}</p> : <p></p>}
                <button onClick={handleNextClick} className="Next-button">
                  Next
                </button>
              </div>
            </>
          ) : (
            ""
          )}

          {birth ? (
            <>
              <div className="iconContainer" onClick={iconClick1}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "red" }}
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">Birth place?</h2>
                <p className="name1">
                  Please enter your Birthplace So that we can provide you
                  accurate Destiny's Prediction.
                </p>
                <h3 className="inputHead">Enter Your Birthplace</h3>
                <div className="nameDiv">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    className="user"
                  />
                  <input
                    type="textbox"
                    className="nameInput"
                    placeholder="Enter Your Birth place"
                    onChange={locationChange}
                    value={location}
                  ></input>
                </div>
                {error ? <p className="error">{error.location}</p> : <p></p>}
                <button onClick={handleNextClick1} className="Next-button">
                  Next
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          {dob ? (
            <>
              <div className="iconContainer" onClick={iconClick2}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "red" }}
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">Date of Birth?</h2>
                <p className="name1">
                  Please enter your D.O.B So that we can Provide you accurate
                  Destiny's Pediction.
                </p>
                <h3 className="inputHead">Enter Your D.O.B</h3>
                <div className="nameDiv">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="xl"
                    className="user"
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={dateChange}
                    calendarClassName="day-only-picker"
                    dateFormat="dd-MM-yyyy"
                    className="nameInput"
                    showMonthDropdown={true}
                    showYearDropdown={true}
                    placeholderText="dd/mm/yyyy"
                  />
                </div>
                {!isValid & (submit2 == false) ? (
                  <p className="error">Enter the date before {maxDate}</p>
                ) : (
                  <p></p>
                )}
                <button onClick={handleNextClick2} className="Next-button">
                  Next
                </button>
              </div>
            </>
          ) : (
            ""
          )}

          {time ? (
            <>
              <div className="iconContainer" onClick={iconClick3}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "red" }}
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">Time Of Birth ?</h2>
                <p className="name1">
                  Please enter your Time of Birth So that we can Provide you
                  accurate Destiny's Prediction
                </p>
                <h3 className="inputHead">Enter Your Time of Birth</h3>
                <div className="nameDiv">
                  <FontAwesomeIcon icon={faClock} size="xl" className="user" />
                  <DatePicker
                    selected={selectedTime}
                    onChange={handleTimeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={1}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="nameInput"
                    placeholderText="Hrs:Min"
                  />
                </div>
                {errorTime && <p className="error">{errorTime}</p>}
                <button onClick={handleNextClick3} className="Next-button">
                  Next
                </button>
              </div>
            </>
          ) : (
            ""
          )}

          {gender ? (
            <>
              <div className="iconContainer" onClick={iconClick4}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="2xl"
                  style={{ color: "red" }}
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">Choose Your Gender ?</h2>
                <p className="name1">
                  To help personalize your experience ,we would like to know a
                  little more baout you.Please select Your gender
                </p>
                <h3 className="inputHead">Select Your Gender</h3>

                <div className="gender-selection-container">
                  <div
                    className={`gender-option ${
                      selectedGender === "male" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelection("male")}
                  >
                    <img src={male} alt="Male" />
                  </div>
                  <div
                    className={`gender-option ${
                      selectedGender === "female" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelection("female")}
                  >
                    <img src={female} alt="Female" />
                  </div>
                  <div
                    className={`gender-option ${
                      selectedGender === "other" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelection("other")}
                  >
                    <img src={others} alt="Other" />
                  </div>
                </div>
                {error ? <p className="error">{error.gender}</p> : <p></p>}
                <button onClick={handleNextClick4} className="Next-button">
                  Next
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="footeruser">
          <Footer1 />
        </div>
      </div>
    </>
  );
}
