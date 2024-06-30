import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNavBar.css";
import I1 from "../assets/1.svg";
import I2 from "../assets/3.svg";
import I3 from "../assets/2.svg";
import I4 from "../assets/4.svg";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setSelected("home");
    } else if (path.includes("/report")) {
      setSelected("report");
    } else if (path.includes("/history")) {
      setSelected("history");
    } else if (path.includes("/profile")) {
      setSelected("profile");
    }
  }, [location.pathname]);

  const handleClick = (icon, path) => {
    setSelected(icon);
    navigate(path);
  };

  return (
    <div className="bottom-nav-bar">
      <button
        className={`nav-item ${selected === "home" ? "selected" : ""}`}
        onClick={() => handleClick("home", "/")}
      >
        <div className="icon home-icon">
          <img src={I1} alt="Home" />
        </div>
      </button>
      <button
        className={`nav-item ${selected === "report" ? "selected" : ""}`}
        onClick={() => handleClick("report", "/1/report")}
      >
        <div className="icon report-icon">
          <img src={I3} alt="Report" />
        </div>
      </button>
      <button
        className={`nav-item ${selected === "history" ? "selected" : ""}`}
        onClick={() => handleClick("history", "/1/history")}
      >
        <div className="icon history-icon">
          <img src={I2} alt="History" />
        </div>
      </button>
      <button
        className={`nav-item ${selected === "profile" ? "selected" : ""}`}
        onClick={() => handleClick("profile", "/1/profile")}
      >
        <div className="icon profile-icon">
          <img src={I4} alt="Profile" />
        </div>
      </button>
    </div>
  );
};

export default BottomNavBar;
