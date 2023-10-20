import { useEffect, useState } from "react";
import Cards from "./intro";
import destiny from "../images/destiny.png";
import "../styles/intro.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Homepage/Nav";
export default function Logo() {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {showContent ? (
        navigate("/Homepage")
      ) : (
        <div className="mainContainer">
          <img src={destiny} height="300px" className="img1"></img>
          <div className="loader"> </div>
        </div>
      )}
    </>
  );
}
