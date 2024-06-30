import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Time.css";
import Situation from "../components/Situation";
import I1 from "../assets/1.png";
import I2 from "../assets/2.png";
import I3 from "../assets/3.png";
import Email from "../assets/Email.png";
import TitleSVG from "../assets/Title.svg";

import { CreateDispatchContext } from "../App";

const padNumber = (number) => {
  return number.toString().padStart(2, "0");
};

const Time = () => {
  const nav = useNavigate();
  const location = useLocation();
  const initialTime = location.state?.totalSeconds || 300;
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const [showSituation, setShowSituation] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showSituationOptions, setShowSituationOptions] = useState(false);
  const { setIsBottomNavBarVisible } = useContext(CreateDispatchContext);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (time <= 0) {
      nav("/emergency");
    }
  }, [time, nav]);

  useEffect(() => {
    setIsBottomNavBarVisible(!showFinishModal);
  }, [showFinishModal, setIsBottomNavBarVisible]);

  const minutes = padNumber(Math.floor(time / 60));
  const seconds = padNumber(time % 60);
  const percentage = (time / initialTime) * 100;

  const addThreeMinutes = () => {
    setTime((prevTime) => prevTime + 180);
    setShowSituationOptions(true);
  };

  const hideSituation = () => {
    setShowSituation(false);
  };

  const handleFinish = () => {
    setIsRunning(false);
    setShowFinishModal(true);
    setIsBottomNavBarVisible(false);
  };

  const handleFinishConfirm = () => {
    setShowFinishModal(false);
    nav("/1/report");
  };

  const handleFinishCancel = () => {
    setShowFinishModal(false);
    setIsRunning(true);
    setIsBottomNavBarVisible(true);
  };

  return (
    <div className="timer-container">
      <img src={TitleSVG} alt="Title" className="title-svg" />
      <div className="timer-circle">
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds}`}
          styles={buildStyles({
            pathColor: `url(#gradient)`,
            textColor: "#fff",
            trailColor: "#444444",
            backgroundColor: "#3e98c7",
          })}
        />
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#CE1212" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <button className="emergency-button" onClick={() => nav("/emergency")}>
        경찰에 신고하기
      </button>
      <button className="finish-button" onClick={handleFinish}>
        상황 종료
      </button>
      <button className="add-time-button" onClick={addThreeMinutes}>
        + 03:00
      </button>
      {showSituation && <Situation onClose={hideSituation} />}
      {showSituationOptions && (
        <div className="situation-buttons">
          <p>어떤 상황인가요?</p>
          <div className="situation-button-item">
            <img className="situation-button-image" src={I1} />
            <div className="sbit">스토킹</div>
          </div>
          <div className="situation-button-item">
            <img className="situation-button-image" src={I2} />
            <div>폭력범죄</div>
          </div>
          <div className="situation-button-item">
            <img className="situation-button-image" src={I3} />
            <div>성범죄</div>
          </div>
        </div>
      )}
      <Modal
        isOpen={showFinishModal}
        onRequestClose={handleFinishCancel}
        contentLabel="Finish Confirmation"
        ariaHideApp={false}
        style={{
          content: {
            position: "absolute",
            left: "195px",
            top: "458px",
            right: "auto",
            bottom: "auto",
            backgroundColor: "black",
            marginRight: "-50%",
            width: "300px",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 30px",
          },
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handleFinishCancel}
        >
          ×
        </button>
        <img
          src={Email}
          alt="Modal"
          style={{ width: "150px", height: "120px", marginBottom: "20px" }}
        />
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>
          위험리포트를 쓰시겠어요?
        </h2>
        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "30px",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          주위에서 감지한 위험요소에 대해 리포트를 작성하여 사회적 불안요소
          근절에 동참해주세요.
        </p>
        <button
          onClick={handleFinishConfirm}
          style={{
            backgroundColor: "transparent",
            borderBottom: "1px solid white",
            borderTop: "0px solid white",
            borderLeft: "0px solid white",
            borderRight: "0px solid white",
            color: "rgba(255, 255, 255, 0.5)",
            padding: "5px 0px",
            cursor: "pointer",
          }}
        >
          리포트 보내러 가기
        </button>
      </Modal>
    </div>
  );
};

export default Time;
