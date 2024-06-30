import React, { useEffect, useState } from "react";
import BottomNavBar from "../components/BottomNavBar";
import "./History.css";
import HistoryItem from "../components/HistoryItem";
import SearchBar from "../components/SearchBar";
import TitleSVG from "../assets/Title.svg";

// google map 개인키로 api 통신

const History = () => {
  const [center, setCenter] = useState({ lat: 37.45162, lng: 126.6613 });
  const [zoom, setZoom] = useState(15.8);

  const FirstCoordinates = [
    { lat: 37.45286, lng: 126.6573 },
    { lat: 37.45322, lng: 126.6588 },
    { lat: 37.45331, lng: 126.6591 },
    { lat: 37.45364, lng: 126.6587 },
    { lat: 37.45391, lng: 126.6596 },
  ];
  const SecondCoordinates = [
    { lat: 37.45264, lng: 126.6623 },
    { lat: 37.45257, lng: 126.6625 },
    { lat: 37.45245, lng: 126.6625 },
    { lat: 37.45227, lng: 126.6631 },
  ];
  const ThirdCoordinates = [
    { lat: 37.45029, lng: 126.6647 },
    { lat: 37.44977, lng: 126.6645 },
    { lat: 37.44914, lng: 126.6643 },
  ];

  const calculateCenter = (coordinates) => {
    const total = coordinates.reduce(
      (acc, coord) => {
        return {
          lat: acc.lat + coord.lat,
          lng: acc.lng + coord.lng,
        };
      },
      { lat: 0, lng: 0 }
    );

    return {
      lat: total.lat / coordinates.length,
      lng: total.lng / coordinates.length,
    };
  };

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: center.lat, lng: center.lng },
      zoom: zoom,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    const FirstPath = new window.google.maps.Polyline({
      path: FirstCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 8,
    });
    const SecondPath = new window.google.maps.Polyline({
      path: SecondCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 8,
    });
    const ThirdPath = new window.google.maps.Polyline({
      path: ThirdCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 8,
    });

    FirstPath.setMap(map);
    SecondPath.setMap(map);
    ThirdPath.setMap(map);

    const circle1 = new window.google.maps.Circle({
      map: map,
      center: { lat: 37.45591, lng: 126.6536348 },
      radius: 120,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 2,
    });
    const circle2 = new window.google.maps.Circle({
      map: map,
      center: { lat: 37.46095, lng: 126.6657 },
      radius: 50,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 2,
    });

    circle1.setMap(map);
    circle2.setMap(map);

    return () => {
      map.setCenter({ lat: center.lat, lng: center.lng });
      map.setZoom(zoom);
    };
  }, [center, zoom, setCenter, setZoom]);

  const handleSearch = (location) => {
    console.log("Search for:", location);
  };

  return (
    <>
      <div className="History">
        <div className="Title_H">
          <img src={TitleSVG} alt="Title" className="title-svg" />
        </div>
        <div style={{ position: "relative" }}>
          <SearchBar onSearch={handleSearch} />{" "}
          <div id="map" style={{ height: "390px", width: "100%" }}></div>
        </div>
        <div className="Historys">
          <div className="Htt">위험상황 발생 기록</div>
          <HistoryItem
            onClick={() => {
              setZoom(17);
              setCenter(calculateCenter(FirstCoordinates));
            }}
            title={"인하로 47번길"}
            info={"1 mile away, 2 days ago"}
            highlight={""}
          />
          <HistoryItem
            onClick={() => {
              setZoom(17);
              setCenter(calculateCenter(ThirdCoordinates));
            }}
            title={"한나루로 477번길"}
            info={"2 mile away, 4 days ago"}
            highlight={""}
          />
          <div className="Htt">내 주변 범죄주의 구간</div>
          <HistoryItem
            onClick={() => {
              setZoom(17);
              setCenter({ lat: 37.45591, lng: 126.6536348 });
            }}
            title={"인천보훈병원 후문"}
            info={"0.5 mile away"}
            highlight={"주의6단계"}
          />
          <HistoryItem
            onClick={() => {
              setZoom(17);
              setCenter({ lat: 37.46095, lng: 126.6657 });
            }}
            title={"수붕근린공원 진입로"}
            info={"1 mile away"}
            highlight={"주의8단계"}
          />
        </div>
      </div>
    </>
  );
};

export default History;
