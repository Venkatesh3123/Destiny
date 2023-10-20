import { useState } from "react";
import "../styles/userInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Userinfo() {
  const [percentage, setPercentage] = useState(0);
  const [user1, setUser1] = useState(true);
  const [birth, setBirth] = useState(false);
  const [dob, setDob] = useState(false);
  const [time, setTime] = useState(false);
  const per = percentage.toString();
  const res = per.slice(0, 3);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleNextClick = () => {
    if (percentage < 100) {
      setPercentage(percentage + 14.2957142857);
    }
    setBirth(true);
    setUser1(false);
  };
  const handleNextClick1 = () => {
    if (percentage < 100) {
      setPercentage(percentage + 14.2957142857);
    }
    setBirth(false);
    setUser1(false);
    setDob(true);
  };
  const handleNextClick2 = () => {
    if (percentage < 100) {
      setPercentage(percentage + 14.2957142857);
    }
    setBirth(false);
    setUser1(false);
    setDob(false);
    setTime(true);
  };
  return (
    <>
      <div className="mainContainer-user">
        <div className="div-progress">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${percentage}%` }}>
              <p className="p-Progress "> {res}%</p>
            </div>
          </div>

          {user1 ? (
            <div>
              <h2 className="name">What is Your name?</h2>
              <div className="nameDiv">
                <FontAwesomeIcon icon={faUser} size="xl" className="user" />
                <input
                  type="textbox"
                  className="nameInput"
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <button onClick={handleNextClick} className="userButton">
                Next
              </button>
            </div>
          ) : (
            ""
          )}

          {birth ? (
            <div>
              <h2 className="name">Birth place?</h2>
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
                ></input>
              </div>
              <button onClick={handleNextClick1} className="userButton">
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {dob ? (
            <div>
              <h2 className="name">Date of Birth?</h2>
              <div className="nameDiv">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  size="xl"
                  className="user"
                />
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  calendarClassName="day-only-picker"
                  dateFormat="dd-MM-yyyy"
                  className="nameInput"
                  showMonthDropdown={true}
                  showYearDropdown={true}
                  placeholderText="dd/mm/yyyy"
                />
              </div>
              <button onClick={handleNextClick2} className="userButton">
                Next
              </button>
            </div>
          ) : (
            ""
          )}

          {time ? (
            <div>
              <h2 className="name">TIme Of Birth ?</h2>
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
              <button onClick={handleNextClick2} className="userButton">
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
