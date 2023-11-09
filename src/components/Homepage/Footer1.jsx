import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  faUser,
  faLocationDot,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/HomepageStyles/Footer1.css";
library.add(fab);

export default function Footer1() {
  return (
    <>
      <div className="mainFooter">
        <div className="mainFooter-sub ">
          <ul className="subDiv-ul">
            <li>
              <a
                href="https://www.google.com/maps/place/T-Hub+Phase+2/@17.4345557,78.3766436,17z/data=!4m14!1m7!3m6!1s0x3bcb93e37831f177:0x32d4499d34baaa78!2sT-Hub+Phase+2!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9!3m5!1s0x3bcb93e37831f177:0x32d4499d34baaa78!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9?entry=ttu"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faUser}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/maps/place/T-Hub+Phase+2/@17.4345557,78.3766436,17z/data=!4m14!1m7!3m6!1s0x3bcb93e37831f177:0x32d4499d34baaa78!2sT-Hub+Phase+2!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9!3m5!1s0x3bcb93e37831f177:0x32d4499d34baaa78!8m2!3d17.4345506!4d78.3792185!16s%2Fg%2F11ddx33gc9?entry=ttu"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>

            <li>
              <a>
                <FontAwesomeIcon
                  icon={faAddressCard}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />{" "}
              </a>
            </li>
            <li>
              <a href="mailto:techsupport@destini.ai" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>
            <li>
              <a
                href=" https://www.linkedin.com/company/destini-ai/ "
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>
            <li>
              <a
                href="  https://x.com/destiniAI?t=6_eoTLfYPnC80tMmSf1smQ&s=09 "
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>
            <li>
              <a
                href=" https://www.facebook.com/destini.cub?mibextid=2JQ9oc"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>
            <li>
              <a
                href="  https://instagram.com/destinii.ai?igshid=NzZlODBkYWE4Ng== "
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="s"
                  style={{ color: "white" }}
                  className="icon-size"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
