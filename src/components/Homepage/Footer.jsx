import "../../styles/HomepageStyles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import {
  faUser,
  faLocationDot,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="FooterDiv1">
          <ul className="UlDiv1">
            {" "}
            <li className="footLi">
              <FontAwesomeIcon
                icon={faUser}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan"> CONTACT US</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan"> Address of the company</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faAddressCard}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan"> About US</span>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan"> www.destiny@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="FooterDiv2">
          <ul className="UlDiv1">
            <li>
              <i class="fa fa-linkedin i" style={{ color: "white" }}></i>
              <span className="liSpan">LinedIn</span>
            </li>
            <li>
              <i class="fa fa-twitter i" style={{ color: "white" }}></i>
              <span className="liSpan">Twitter</span>
            </li>
            <li>
              <i class="fa fa-facebook i" style={{ color: "white" }}></i>
              <span className="liSpan">Facebook</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
