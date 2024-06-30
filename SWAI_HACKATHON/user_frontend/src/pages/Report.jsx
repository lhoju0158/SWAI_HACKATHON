import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CreateDispatchContext } from "../App";
import TitleSVG from "../assets/Title.svg";
import CameraSVG from "../assets/camera.svg";
import "./Report.css";

const Report = () => {
  const { id, timerid } = useParams();
  const { onCreateComplain } = useContext(CreateDispatchContext);
  const [body1, setBody1] = useState("");
  const [body2, setBody2] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPosition) {
      onCreateComplain(
        Number(timerid),
        Number(id),
        body1,
        body2,
        selectedPosition
      );
      navigate(`/history`);
    } else {
      alert("Please select a position on the map.");
    }
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedPosition({ lat, lng });
    setShowMap(false);
  };

  useEffect(() => {
    if (showMap && mapRef.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.45162, lng: 126.6613 },
        zoom: 15.5,
      });

      mapInstance.current.addListener("click", handleMapClick);
    }
  }, [showMap]);

  useEffect(() => {
    if (selectedPosition && mapInstance.current) {
      new window.google.maps.Marker({
        position: selectedPosition,
        map: mapInstance.current,
      });
    }
  }, [selectedPosition]);

  return (
    <>
      <div className="Report">
        <div className="Title">
          <div type="submit" form="reportForm" className="submitButton_1"></div>
          <img src={TitleSVG} alt="Title" className="title-svg" />
          <button
            onClick={() => {
              navigate("/");
            }}
            className="submitButton_2"
          >
            제출
          </button>
        </div>
        {!showMap ? (
          <div className="context">
            <form id="reportForm" onSubmit={handleSubmit}>
              <div className="smallTitle">피해대상</div>
              <div className="textarea-container">
                <textarea
                  className="textarea_1"
                  value={body1}
                  onChange={(e) => setBody1(e.target.value)}
                  placeholder="이름 또는 인상착의"
                />
              </div>
              <div className="smallTitle">어떤 일이 있었나요?</div>
              <textarea
                className="textarea_2"
                value={body2}
                onChange={(e) => setBody2(e.target.value)}
                placeholder="누가, 언제, 무엇을, 어떻게"
              />
              <div className="smallTitle">증거 첨부(선택)</div>
              <div className="textarea-container">
                <textarea
                  className="textarea_1"
                  placeholder="사진에서 가져오기"
                />
                <img src={CameraSVG} alt="Camera" className="camera-icon" />
              </div>
              <button
                className="_button"
                type="button"
                onClick={() => setShowMap(true)}
              >
                지도에서 선택하기
              </button>
            </form>
          </div>
        ) : (
          <div className="MapContainer">
            <div id="map" ref={mapRef} className="mapFullScreen"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Report;
