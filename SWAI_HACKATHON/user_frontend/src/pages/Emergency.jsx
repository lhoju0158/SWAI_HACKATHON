import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Emergency.css";
import Sos from "../assets/SOS.png";

const Emergency = () => {
  const [isRed, setIsRed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
    }, 300);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 100000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="Emergency-container">
      <div className="Emergency-header">
        <span>경찰에 신고가 접수되었습니다</span>
      </div>
      <div className="Emergency-content">
        <div className={`Emergency-sos ${isRed ? "red" : "darkred"}`}>
          <div className="nested-circles">
            <div className="inner-circle">
              <img className="EImage" src={Sos} alt="SOS" />
            </div>
          </div>
        </div>
        <button className="Emergency-cancel" onClick={() => navigate("/")}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Emergency;
