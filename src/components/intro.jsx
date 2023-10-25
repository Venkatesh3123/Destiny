import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import destiny from "../images/destiny.png";
import "../styles/intro.css";
const cards = [
  {
    title: "Welcome to the world of astrology",
    content:
      "Astrology is an antiquated convention which says that the character and predetermination of human rely upon the situation of the stars right now of birth.",
    img: "https://cdn.britannica.com/45/104045-050-116C1F93/Signs-of-the-Zodiac-astrology.jpg",
    info: "https://astroshailyy.com/img/service/Horoscope.jpg",
  },
  {
    title: "Your path is illuminated by a road-map of stars.",
    content:
      "A life path number is a unique number that is calculated from your date of birth. Similar to your astrological Sun sign for all you astrology girls.",
    img: "https://media.istockphoto.com/id/1185206896/photo/man-walking-in-nature.webp?b=1&s=170667a&w=0&k=20&c=Cfdfx_djepNXa71H4ifArqko02sGXwfpzJlXvyWciyc=",
    info: "https://cloudfront.slrlounge.com/wp-content/uploads/2018/06/how-to-photograph-the-milky-way-portraits-05.jpg",
  },
  {
    title: "Astrology reveals the will of gods",
    content:
      "Astrology coming into your life is also destined by God. The thought of going to an Astrologer cannot come to you without it being written in your destiny.",
    img: "https://www.liveabout.com/thmb/7kmj3m4sphBCBg34yZbezU03_Bc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-539641141-58bc82b55f9b58af5c9beeb8.jpg",
    info: "https://img.freepik.com/free-photo/esoteric-composition-zodiac-astrology-with-zodiac-sign_23-2150356606.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais",
  },
];

export default function Cards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [prev, setPrev] = useState(false);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowContent(true);
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);
  const skip = () => {
    navigate("/Signup");
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else {
      navigate("/Signup");
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
    }
  };

  return (
    <div className="start1">
      <div className="cardBorder">
        <div className="card1">
          <h4 onClick={skip} className="skip">
            Skip
          </h4>
          <div className="card1Img">
            <img src={cards[currentCardIndex].img} className="card1Img1"></img>
          </div>
          <h3 className="cardH2">{cards[currentCardIndex].title}</h3>
          <p className="p">{cards[currentCardIndex].content}</p>
          <div className="card1Img">
            <img
              src={cards[currentCardIndex].info}
              className="card1Img11"
            ></img>
          </div>

          <div>
            {currentCardIndex === 0 ? (
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={prevCard}
                disabled={currentCardIndex === 0}
                className="arrowLeft1"
                size="2x"
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={prevCard}
                disabled={currentCardIndex === 0}
                className="arrowLeft"
                size="2x"
              />
            )}

            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={nextCard}
              className="arrowRight"
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
