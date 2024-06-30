import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript, InfoWindow, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import Sidebar from '../components/Sidebar';
import styled from "styled-components";


function Home() {

    const FirstCoordinates = [
        { lat: 37.45286, lng: 126.6573 },
        { lat: 37.45322, lng: 126.6588 },
        { lat: 37.45331, lng: 126.6591 },
        { lat: 37.45364, lng: 126.6587 },
        { lat: 37.45391, lng: 126.6596 }
      ];

    const SecondCoordinates = [
        { lat: 37.45264, lng: 126.6623 },
        { lat: 37.45257, lng: 126.6625 },
        { lat: 37.45245, lng: 126.6625 },
        { lat: 37.45227, lng: 126.6631 }
    ];
    
    const ThirdCoordinates = [
        { lat: 37.45029, lng: 126.6647 },
        { lat: 37.44977, lng: 126.6645 },
        { lat: 37.44914, lng: 126.6643 }
    ];



    const containerStyle = {
        width: '1270px',
        height: '650px',
        float: 'right',
        top: '30px'
    };
      
    const center = {
        lat: 37.45286, lng: 126.657
    };

    const markerPosition={
        lat: 37.45286, lng: 126.657
    };
    
    const myStyles = [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ];
    
    const mapRef = useRef(null);

    const markersData1 = [
        { id: 1, position: { lat: 37.45286, lng: 126.6573 }, title: 'Marker 1', content: 'This is marker 1' },
        { id: 2, position: { lat: 37.45322, lng: 126.6588 }, title: 'Marker 2', content: 'This is marker 2' },
        { id: 3, position: { lat: 37.45331, lng: 126.6591 }, title: 'Marker 3', content: 'This is marker 3' },
        { id: 4, position: { lat: 37.45364, lng: 126.6587 }, title: 'Marker 3', content: 'This is marker 3' },
        { id: 5, position: { lat: 37.45391, lng: 126.6596 }, title: 'Marker 3', content: 'This is marker 3' },
      ];

    useEffect(() => {
      const mapOptions={
        center: { lat: 37.45286, lng: 126.657},
        zoom: 10,
        styles: [
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit.station.bus',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit.station.rail',
              stylers: [{ visibility: 'off' }]
            }
          ]
      };
      // 맵을 초기화합니다
      const map = new window.google.maps.Map(mapRef.current, mapOptions);
  
      const markers=markersData1.map(markerData => {
        const marker = new window.google.maps.Marker({
          position: markerData.position,
          map,
          title: markerData.title,
        });
  
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<h2>${markerData.title}</h2><p>${markerData.content}</p>`,
        });
  
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return markerData.position;
      });

      const polyline = new window.google.maps.Polyline({
        path: markers,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
  
      polyline.setMap(map);

    }, []);
  
    return(
        <div options={{ disableDefaultUI: true, styles: myStyles }}>
            <Sidebar />
            <h1 style={{fontFamily:"Helvetica", fontSize:"50px"}}>Safe Walking</h1>
            <div ref={mapRef} style={containerStyle} />
        </div>
    );
  
    
}

export default Home;
