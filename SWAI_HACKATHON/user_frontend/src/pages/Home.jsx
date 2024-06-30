import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Home.css";
import BottomNavBar from "../components/BottomNavBar";
import arrowImage from "../assets/ph_play-fill.png";
import TitleSVG from "../assets/Title.svg";

const generateOptions = (range, unit) =>
  Array.from({ length: range }, (_, i) => ({
    value: i,
    label: `${i < 10 ? "0" : ""}${i} ${unit}`,
  }));

const Home = () => {
  const nav = useNavigate();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    nav("/time", { state: { totalSeconds } });
  };

  const handleScroll = (event, setValue, range) => {
    event.preventDefault();
    const currentIndex = parseInt(event.target.value, 10);
    if (event.deltaY < 0 && currentIndex < range - 1) {
      setValue(currentIndex + 1);
    } else if (event.deltaY > 0 && currentIndex > 0) {
      setValue(currentIndex - 1);
    }
  };

  const hoursOptions = generateOptions(24, "시간");
  const minutesOptions = generateOptions(60, "분");
  const secondsOptions = generateOptions(60, "초");

  return (
    <div className="Home">
      <img src={TitleSVG} alt="Title" className="title-svg" />
      <div className="Buttons">
        <button onClick={handleStart}>
          <img src={arrowImage} alt="arrow" className="arrowImage" />
        </button>
      </div>
      <div className="TimeSelectors">
        <div className="TimePart Hour">
          <select
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            onWheel={(e) => handleScroll(e, setHours, 24)}
          >
            {hoursOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label.split(" ")[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="Separator">:</div>
        <div className="TimePart Minit">
          <select
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            onWheel={(e) => handleScroll(e, setMinutes, 60)}
          >
            {minutesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label.split(" ")[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="Separator">:</div>
        <div className="TimePart Second">
          <select
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            onWheel={(e) => handleScroll(e, setSeconds, 60)}
          >
            {secondsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label.split(" ")[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
