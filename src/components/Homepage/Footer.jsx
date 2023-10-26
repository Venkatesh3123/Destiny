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
              <span className="liSpan">
                <a
                  href="https://www.google.com/maps/place/T-Hub+Phase+2/@17.4345557,78.3766436,17z/data=!4m14!1m7!3m6!1s0x3bcb93e37831f177:0x32d4499d34baaa78!2sT-Hub+Phase+2!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9!3m5!1s0x3bcb93e37831f177:0x32d4499d34baaa78!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9?entry=ttu"
                  target="_blank"
                  className="a"
                >
                  T-Hub phase 2, Hyderabad
                </a>{" "}
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faAddressCard}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan"> About Us</span>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                size="s"
                style={{ color: "white" }}
                className="i"
              />
              <span className="liSpan">
                <a
                  href="mailto:techsupport@destini.ai"
                  target="_blank"
                  className="a"
                >
                  techsupport@destini.ai
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="FooterDiv2">
          <ul className="UlDiv1">
            <li>
              <i class="fa fa-linkedin i" style={{ color: "white" }}></i>
              <span className="liSpan1">
                <a
                  href=" https://www.linkedin.com/company/destini-ai/ "
                  className="a"
                  target="_blank"
                >
                  LinedIn
                </a>
              </span>
            </li>
            <li>
              <i class="fa fa-twitter i" style={{ color: "white" }}></i>
              <span className="liSpan">
                {" "}
                <a
                  href="  https://x.com/destiniAI?t=6_eoTLfYPnC80tMmSf1smQ&s=09 "
                  className="a"
                  target="_blank"
                >
                  Twitter
                </a>
              </span>
            </li>
            <li>
              <i class="fa fa-facebook i" style={{ color: "white" }}></i>
              <span className="liSpan">
                {" "}
                <a
                  href=" https://www.facebook.com/destini.cub?mibextid=2JQ9oc"
                  className="a"
                  target="_blank"
                >
                  Facebook
                </a>
              </span>
            </li>
            <li>
              <i class="fa fa-instagram i" style={{ color: "white" }}></i>
              <span className="liSpan">
                {" "}
                <a
                  href="  https://instagram.com/destinii.ai?igshid=NzZlODBkYWE4Ng== "
                  className="a"
                  target="_blank"
                >
                  Instagram
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
